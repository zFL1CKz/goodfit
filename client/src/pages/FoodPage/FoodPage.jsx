import React, { useCallback, useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Modal } from '../../components/modals/modal'
import { Loader } from '../../components/loader/Loader'

import back from '../../img/back.svg'
import foodAdd from '../../img/icons/food-add.svg'
import searchImg from '../../img/icons/search.svg'
import './FoodPage.css'

export const FoodPage = () => {
  const [modalActive, setModalActive] = useState(false)
  const [isReceipt, setIsReceipt] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const currentDay = JSON.parse(localStorage.getItem('training'))?.day || 0
  const [selectedDay, setSelectedDay] = useState(currentDay)
  let [glasses, setGlasses] = useState(0)
  const { token } = useContext(AuthContext)
  const { request, error, clearError } = useHttp()

  let [liters, setLiters] = useState('0.00')

  const searchHandler = (e) => setSearchInput(e.target.value)

  useEffect(() => {
    if (searchInput.length > 0) setIsSearch(true)
  }, [searchInput])

  const [food, setFood] = useState([])

  const [modalNavScreen, setModalNavScreen] = useState(1)

  function setModalNavActive(screen) {
    let navBg = document.querySelector('.food-modal__receipt-nav--bg')
    if (screen === 1) navBg.style.left = '0'
    else if (screen === 2) navBg.style.left = '25%'
    else if (screen === 3) navBg.style.left = '50%'
    else navBg.style.left = '75%'
    setModalNavScreen(screen)
  }

  const maxDays = JSON.parse(localStorage.getItem('training'))?.maxDays || 0

  let days = []

  function checkDays() {
    for (let i = 1; i <= maxDays; i++) {
      days.push(i)
    }
  }

  checkDays()

  const getFood = useCallback(async () => {
    try {
      await request('/api/getfood', 'GET', null).then((res) => {
        setFood(res)
      })
      setIsReady(true)
    } catch (error) {
      console.log(error)
    }
  }, [request, token])

  useEffect(() => {
    getFood()
  }, [getFood])

  function setReceipt(item) {
    document.querySelector('.header__title').innerHTML = item.querySelector(
      '.food__receipt-title'
    ).innerHTML
    setIsReceipt(true)
  }

  function showFoodInfo(e) {
    let itemActive = document.querySelector('.receipt__item-info.active')
    if (itemActive !== null) itemActive.classList.remove('active')
    e.querySelector('.receipt__item-info').classList.add('active')
    e.querySelector('.receipt__item-info input').focus()
  }

  async function addFood(e, item) {
    if (e.querySelector('input').value.length <= 0) {
      e.querySelector('.receipt__item-input').style.color = 'red'
      e.querySelector('input').style.borderBottomColor = 'red'
      e.querySelector('input').style.color = 'red'
    } else {
      e.querySelector('.receipt__item-input').style.color = '#74808c'
      e.querySelector('input').style.borderBottomColor = '#0377a6'
      e.querySelector('input').style.color = '#0377a6'

      let reqObject = {
        foodId: item._id,
        gram: Number(e.querySelector('input').value),
        partOfDay: document.querySelector('.header__title').innerHTML,
      }

      try {
        await request(
          '/api/setfood',
          'POST',
          { ...reqObject },
          {
            Authorization: `Bearer ${token}`,
          }
        )
      } catch (error) {
        console.log(error)
      }

      e.querySelector('input').value = ''
    }
  }

  function setActiveReceiptItem(e) {
    if (e.classList.contains('active')) return
    document
      .querySelector('.receipt__nav-item.active')
      .classList.remove('active')
    e.classList.add('active')
  }

  function addGlass() {
    setGlasses((glasses += 1))
    let div = document.createElement('div')
    div.classList.add('food__water-glass')
    document.querySelector('.food__water-glass-group').append(div)
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
    setLiters(parseFloat(liters) + 0.25)
  }

  if (isReceipt) {
    if (!isReady) {
      return <Loader />
    } else {
      return (
        <>
          <img
            src={back}
            alt=""
            style={{
              position: 'absolute',
              top: '50px',
              left: '100px',
              zIndex: '2',
            }}
            onClick={() => {
              setIsReceipt(false)
              document.querySelector('.header__title').innerHTML = 'Питание'
            }}
          />
          <div className="container">
            <div className="receipt__nav">
              <div
                className="receipt__nav-item active"
                onClick={(e) => setActiveReceiptItem(e.currentTarget)}
              >
                Продукты
              </div>
              <div
                className="receipt__nav-item"
                onClick={(e) => setActiveReceiptItem(e.currentTarget)}
              >
                Готовые блюда
              </div>
            </div>
            <div className="receipt__search">
              <img src={searchImg} alt="" />
              <input
                type="text"
                placeholder="Поиск продукта..."
                onChange={searchHandler}
              />
            </div>

            {food.map((item, index) => {
              return (
                <div
                  className="receipt__item"
                  key={index}
                  onClick={(e) => showFoodInfo(e.currentTarget)}
                >
                  <div className="receipt__item-group">
                    <div className="receipt__item-name">{item.name}</div>
                    <img
                      src={foodAdd}
                      alt=""
                      onClick={(e) =>
                        addFood(e.currentTarget.parentNode.parentNode, item)
                      }
                    />
                  </div>
                  <div className="receipt__item-info">
                    <div className="receipt__item-info--bel">
                      Калории: {item.cal}
                    </div>
                    <div className="receipt__item-info--bel">
                      Белки: {item.bel}
                    </div>
                    <div className="receipt__item-info--bel">
                      Жиры: {item.fat}
                    </div>
                    <div className="receipt__item-info--bel">
                      Углеводы: {item.sug}
                    </div>

                    <div className="receipt__item-input">
                      <div className="receipt__item-input--text">
                        Введите количество грамм:
                      </div>
                      <input type="number" />
                      <div>г</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )
    }
  } else {
    if (JSON.parse(localStorage.getItem('training')) === null) {
      return (
        <div className="food--error">
          Чтобы этот раздел стал доступен, Вам необходимо начать любую из
          тренировок
        </div>
      )
    } else {
      return (
        <div className="food">
          <div className="food__info">
            <div className="container">
              <div className="food__remaining">
                <div className="food__remaining-num">2400</div>
                <div className="food__remaining-text fz20">осталось</div>
                <div
                  className="food__remaining-bar"
                  style={{ marginBottom: '40px' }}
                >
                  <div className="food__remaining-bar--fill"></div>
                </div>

                <div className="food__remaining-group">
                  <div className="food__remaining-group-item">
                    <div className="food__remaining-title">Белки</div>
                    <div className="food__remaining-bar">
                      <div className="food__remaining-bar--fill bel"></div>
                    </div>
                    <div className="food__remaining-subtitle">0 г</div>
                  </div>

                  <div className="food__remaining-group-item">
                    <div className="food__remaining-title">Жиры</div>
                    <div className="food__remaining-bar">
                      <div className="food__remaining-bar--fill fat"></div>
                    </div>
                    <div className="food__remaining-subtitle">0 г</div>
                  </div>

                  <div className="food__remaining-group-item">
                    <div className="food__remaining-title">Углеводы</div>
                    <div className="food__remaining-bar">
                      <div className="food__remaining-bar--fill sug"></div>
                    </div>
                    <div className="food__remaining-subtitle">0 г</div>
                  </div>
                </div>

                <button
                  className="food__remaining-btn"
                  onClick={() => setModalActive(true)}
                >
                  Подробности
                </button>
              </div>

              <div className="food__receipt">
                <div className="food__title">Приемы пищи</div>

                <div className="food__receipt-grid">
                  <div
                    className="food__receipt-grid-item"
                    onClick={(e) => setReceipt(e.currentTarget)}
                  >
                    <div className="food__receipt-title">Завтрак</div>
                    <div className="food__receipt-img"></div>
                    <div className="food__receipt-text">Добавить</div>
                  </div>

                  <div
                    className="food__receipt-grid-item"
                    onClick={(e) => setReceipt(e.currentTarget)}
                  >
                    <div className="food__receipt-title">Обед</div>
                    <div className="food__receipt-img"></div>
                    <div className="food__receipt-text">Добавить</div>
                  </div>

                  <div
                    className="food__receipt-grid-item"
                    onClick={(e) => setReceipt(e.currentTarget)}
                  >
                    <div className="food__receipt-title">Ужин</div>
                    <div className="food__receipt-img"></div>
                    <div className="food__receipt-text">Добавить</div>
                  </div>

                  <div
                    className="food__receipt-grid-item"
                    onClick={(e) => setReceipt(e.currentTarget)}
                  >
                    <div className="food__receipt-title">Перекус</div>
                    <div className="food__receipt-img"></div>
                    <div className="food__receipt-text">Добавить</div>
                  </div>
                </div>
              </div>

              <div className="food__water">
                <div className="food__title">Отслеживание выпитой воды</div>

                <div className="food__water-title">Вода</div>
                <div className="food__water-liter">{liters} Л</div>

                <div className="food__water-glass-group">
                  <div
                    className="food__water-glass add"
                    onClick={addGlass}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <Modal active={modalActive} setActive={setModalActive}>
            <div className="food-modal__block">
              <div className="food-modal__title">
                Согласно персональнному расчету калорий
              </div>
              <div className="food-modal__list">
                <div className="food-modal__list-item active">
                  2400 калорий, чтобы вес не менялся{' '}
                </div>
                <div className="food-modal__list-item">
                  2230 калорий, для похудения{' '}
                </div>
                <div className="food-modal__list-item">
                  1950 калорий, чтобы похудеть быстро{' '}
                </div>
              </div>
            </div>

            <div className="food-modal__block">
              <div className="food-modal__title">Приемы пищи</div>
              <div className="food-modal__receipt">
                <div className="food-modal__receipt-nav">
                  <div
                    className={
                      modalNavScreen === 1
                        ? 'food-modal__receipt-nav-item active'
                        : 'food-modal__receipt-nav-item'
                    }
                    onClick={() => setModalNavActive(1)}
                  >
                    Завтрак
                  </div>
                  <div
                    className={
                      modalNavScreen === 2
                        ? 'food-modal__receipt-nav-item active'
                        : 'food-modal__receipt-nav-item'
                    }
                    onClick={() => setModalNavActive(2)}
                  >
                    Обед
                  </div>
                  <div
                    className={
                      modalNavScreen === 3
                        ? 'food-modal__receipt-nav-item active'
                        : 'food-modal__receipt-nav-item'
                    }
                    onClick={() => setModalNavActive(3)}
                  >
                    Ужин
                  </div>
                  <div
                    className={
                      modalNavScreen === 4
                        ? 'food-modal__receipt-nav-item active'
                        : 'food-modal__receipt-nav-item'
                    }
                    onClick={() => setModalNavActive(4)}
                  >
                    Перекус
                  </div>
                  <div className="food-modal__receipt-nav--bg"></div>
                </div>

                <div className="food-modal__receipt-info">
                  <div className="food-modal__receipt-info-item">
                    <div>Калории</div>
                    <div className="food-modal__receipt-dots"></div>
                    <div>792 ккал</div>
                  </div>

                  <div className="food-modal__receipt-info-item">
                    <div>Углеводы</div>
                    <div className="food-modal__receipt-dots"></div>
                    <div>130 г</div>
                  </div>

                  <div className="food-modal__receipt-info-item">
                    <div>Белки</div>
                    <div className="food-modal__receipt-dots"></div>
                    <div>80 г</div>
                  </div>

                  <div className="food-modal__receipt-info-item">
                    <div>Жиры</div>
                    <div className="food-modal__receipt-dots"></div>
                    <div>80 г</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )
    }
  }
}
