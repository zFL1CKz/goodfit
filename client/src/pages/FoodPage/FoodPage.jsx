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
  const [calc, setCalc] = useState(0)
  const [remainingCalc, setRemainingCalc] = useState(0)
  const [bel, setBel] = useState(0)
  const [fat, setFat] = useState(0)
  const [sug, setSug] = useState(0)
  const [searchInput, setSearchInput] = useState('')
  const [foodInput, setFoodInput] = useState(100)
  const currentDay = JSON.parse(localStorage.getItem('training'))?.day || 0
  const [selectedDay, setSelectedDay] = useState(currentDay)
  let [glasses, setGlasses] = useState(0)
  const { token } = useContext(AuthContext)
  const { request, error, clearError } = useHttp()
  const [user, setUser] = useState([])
  const [userFood, setUserFood] = useState([])
  const [userFoodWithDay, setUserFoodWithDay] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [readyMeals, setReadyMeals] = useState([])
  const [filteredReadyMeals, setFilteredReadyMeals] = useState([])
  const [currentReceiptActive, setCurrentReceiptActive] = useState(1)

  let [liters, setLiters] = useState('0.00')

  useEffect(() => {
    if (liters > 3.5) document.querySelector('.food__water-warning').style.display = 'block'
  }, [liters])

  const searchHandler = (e) => setSearchInput(e.target.value)
  const foodInputHandler = (e) => setFoodInput(e.target.value)

  useEffect(() => {
    if (searchInput.length > 0) setIsSearch(true)
    else setIsSearch(false)
    let productsArr = []
    let readyMealsArr = []
    for (const product of products) {
      if (product.name.toLowerCase().indexOf(searchInput.trim().toLowerCase()) !== -1) productsArr.push(product)
    }
    for (const meal of readyMeals) {
      if (meal.name.toLowerCase().indexOf(searchInput.trim().toLowerCase()) !== -1) readyMealsArr.push(meal)
    }
    setFilteredProducts(productsArr)
    setFilteredReadyMeals(readyMealsArr)
    // if (Object.values(products).name.toLowerCase().indexOf(searchInput.trim().toLowerCase()) !== -1) productsArr.push(products)
  }, [searchInput])

  const [modalNavScreen, setModalNavScreen] = useState(1)

  function setModalNavActive(screen) {
    let navBg = document.querySelector('.food-modal__receipt-nav--bg')
    if (screen === 1) {
      checkFoodInfoWithPartOfDay('Завтрак')
      navBg.style.left = '0'
    } else if (screen === 2) {
      checkFoodInfoWithPartOfDay('Обед')
      navBg.style.left = '25%'
    } else if (screen === 3) {
      checkFoodInfoWithPartOfDay('Ужин')
      navBg.style.left = '50%'
    } else {
      checkFoodInfoWithPartOfDay('Перекус')
      navBg.style.left = '75%'
    }
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

  const getUser = useCallback(async () => {
    try {
      await request('/api/getuserinfo', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setUser(res)
      })
    } catch (error) {
      console.log(error)
    }
  }, [request, token])

  useEffect(() => {
    getUser()
  }, [getUser])

  const getUserFood = useCallback(
    async (userCalc) => {
      try {
        await request('/api/getuserfood', 'GET', null, {
          Authorization: `Bearer ${token}`,
        }).then((res) => {
          setUserFood(res)
          let calcNumber = userCalc
          let belNumber = bel
          let fatNumber = fat
          let sugNumber = sug
          for (const item of res) {
            calcNumber -= (item.gram * item.food.cal) / 100
            belNumber += (item.gram * item.food.bel) / 100
            fatNumber += (item.gram * item.food.fat) / 100
            sugNumber += (item.gram * item.food.sug) / 100
          }
          if (calcNumber <= 0) calcNumber = 0
          setRemainingCalc(calcNumber)
          setBel(Math.floor(belNumber))
          setFat(Math.floor(fatNumber))
          setSug(Math.floor(sugNumber))
        })
        setIsReady(true)
      } catch (error) {
        console.log(error)
      }
    },
    [request, token]
  )

  const getFood = useCallback(async () => {
    try {
      await request('/api/getfood', 'GET', null).then((res) => {
        setProducts(res.filter((item) => item.type.name === 'Продукты'))
        setReadyMeals(res.filter((item) => item.type.name === 'Готовые блюда'))
      })
    } catch (error) {
      console.log(error)
    }
  }, [request, token])

  useEffect(() => {
    getFood()
  }, [getFood])

  function checkFoodInfoWithPartOfDay(day) {
    let info = []
    let filteredUserFood = userFood.filter((el) => el.partOfDay === day)

    if (filteredUserFood.length > 0) {
      let cal = 0
      let bel = 0
      let fat = 0
      let sug = 0
      for (const item of filteredUserFood) {
        cal += (item.food.cal * item.gram) / 100
        bel += (item.food.bel * item.gram) / 100
        fat += (item.food.fat * item.gram) / 100
        sug += (item.food.sug * item.gram) / 100
      }
      info.push(Math.floor(cal), Math.floor(bel), Math.floor(fat), Math.floor(sug))
      setUserFoodWithDay(info)
    } else {
      info.push(0, 0, 0, 0)
      setUserFoodWithDay(info)
    }
  }

  useEffect(() => {
    checkFoodInfoWithPartOfDay('Завтрак')
  }, [isReady])

  function setReceipt(item) {
    document.querySelector('.header__title').innerHTML = item.querySelector('.food__receipt-title').innerHTML
    setIsReceipt(true)
  }

  const checkCalc = useCallback(() => {
    if (Object.keys(user).length > 0) {
      let age = Math.floor((new Date() - new Date(user.info.birth)) / 1000 / (60 * 60 * 24) / 365.25)
      let result = Math.floor(user.info.weight * 10 + user.info.height * 6.25 - age * 5 + 5)

      setCalc(result)
      if (user.activity.name === 'Поддерживать текущий вес') getUserFood(result)
      else if (user.activity.name === 'Похудеть') getUserFood(Math.floor(result * 0.85))
      else if (user.activity.name === 'Похудеть быстро') getUserFood(Math.floor(result * 0.65))
    }
  }, [user])

  useEffect(() => {
    checkCalc()
  }, [checkCalc])

  function showFoodInfo(e) {
    let itemActive = document.querySelector('.receipt__item-info.active')
    if (itemActive !== null) itemActive.classList.remove('active')
    e.querySelector('.receipt__item-info').classList.add('active')
    e.querySelector('.receipt__item-info input').focus()
    setFoodInput(100)
  }

  async function addFood(e, item) {
    if (foodInput <= 0) {
      e.querySelector('.receipt__item-input').style.color = 'red'
      e.querySelector('input').style.borderBottomColor = 'red'
      e.querySelector('input').style.color = 'red'
    } else {
      e.querySelector('.receipt__item--added').style.fontSize = '14px'
      setTimeout(() => {
        e.querySelector('.receipt__item--added').style.fontSize = '0px'
      }, 2500)
      e.querySelector('.receipt__item-input').style.color = '#74808c'
      e.querySelector('input').style.borderBottomColor = '#0377a6'
      e.querySelector('input').style.color = '#0377a6'

      let reqObject = {
        foodId: item._id,
        gram: Number(foodInput),
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

      setFoodInput(100)
    }
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

  if (!isReady) {
    return <Loader />
  } else {
    if (isReceipt) {
      if (!isReady) {
        return <Loader />
      } else {
        return (
          <>
            <img
              src={back}
              alt=''
              style={{
                position: 'absolute',
                top: '50px',
                left: '100px',
                zIndex: '2',
              }}
              onClick={() => {
                setIsReceipt(false)
                document.querySelector('.header__title').innerHTML = 'Питание'
                setIsReady(false)
                checkCalc()
              }}
            />
            <div className='container'>
              <div className='receipt__nav'>
                <div className={`${currentReceiptActive === 1 ? 'receipt__nav-item active' : 'receipt__nav-item'}`} onClick={() => setCurrentReceiptActive(1)}>
                  Продукты
                </div>
                <div className={`${currentReceiptActive === 2 ? 'receipt__nav-item active' : 'receipt__nav-item'}`} onClick={() => setCurrentReceiptActive(2)}>
                  Готовые блюда
                </div>
              </div>
              <div className='receipt__search'>
                <img src={searchImg} alt='' />
                <input type='text' placeholder={currentReceiptActive === 1 ? 'Поиск продукта...' : 'Поиск готового блюда...'} onChange={searchHandler} />
              </div>

              {currentReceiptActive === 1 && (
                <>
                  {isSearch ? (
                    <>
                      {filteredProducts.length > 0 ? (
                        <>
                          {filteredProducts.map((item, index) => {
                            return (
                              <div className='receipt__item' key={index} onClick={(e) => showFoodInfo(e.currentTarget)}>
                                <div className='receipt__item-group'>
                                  <div className='receipt__item-name'>{item.name}</div>
                                  <img src={foodAdd} alt='' onClick={(e) => addFood(e.currentTarget.parentNode.parentNode, item)} />
                                </div>
                                <div className='receipt__item-info'>
                                  <div className='receipt__item-info--bel'>Калории: {Math.floor((item.cal * foodInput) / 100)}</div>
                                  <div className='receipt__item-info--bel'>Белки: {Math.floor((item.bel * foodInput) / 100)}</div>
                                  <div className='receipt__item-info--bel'>Жиры: {Math.floor((item.fat * foodInput) / 100)}</div>
                                  <div className='receipt__item-info--bel'>Углеводы: {Math.floor((item.sug * foodInput) / 100)}</div>

                                  <div className='receipt__item-input'>
                                    <div className='receipt__item-input--text'>Введите количество грамм:</div>
                                    <input type='number' value={foodInput} onChange={foodInputHandler} />
                                    <div>г</div>
                                  </div>

                                  <div className='receipt__item--added'>Продукт успешно добавлен!</div>
                                </div>
                              </div>
                            )
                          })}
                        </>
                      ) : (
                        <div className='search--error'>Ничего не найдено</div>
                      )}
                    </>
                  ) : (
                    <>
                      {products.map((item, index) => {
                        return (
                          <div className='receipt__item' key={index} onClick={(e) => showFoodInfo(e.currentTarget)}>
                            <div className='receipt__item-group'>
                              <div className='receipt__item-name'>{item.name}</div>
                              <img src={foodAdd} alt='' onClick={(e) => addFood(e.currentTarget.parentNode.parentNode, item)} />
                            </div>
                            <div className='receipt__item-info'>
                              <div className='receipt__item-info--bel'>Калории: {Math.floor((item.cal * foodInput) / 100)}</div>
                              <div className='receipt__item-info--bel'>Белки: {Math.floor((item.bel * foodInput) / 100)}</div>
                              <div className='receipt__item-info--bel'>Жиры: {Math.floor((item.fat * foodInput) / 100)}</div>
                              <div className='receipt__item-info--bel'>Углеводы: {Math.floor((item.sug * foodInput) / 100)}</div>

                              <div className='receipt__item-input'>
                                <div className='receipt__item-input--text'>Введите количество грамм:</div>
                                <input type='number' value={foodInput} onChange={foodInputHandler} />
                                <div>г</div>
                              </div>

                              <div className='receipt__item--added'>Продукт успешно добавлен!</div>
                            </div>
                          </div>
                        )
                      })}
                    </>
                  )}
                </>
              )}

              {currentReceiptActive === 2 && (
                <>
                  {isSearch ? (
                    <>
                      {filteredReadyMeals.length > 0 ? (
                        <>
                          {filteredReadyMeals.map((item, index) => {
                            return (
                              <div className='receipt__item' key={index} onClick={(e) => showFoodInfo(e.currentTarget)}>
                                <div className='receipt__item-group'>
                                  <div className='receipt__item-name'>{item.name}</div>
                                  <img src={foodAdd} alt='' onClick={(e) => addFood(e.currentTarget.parentNode.parentNode, item)} />
                                </div>
                                <div className='receipt__item-info'>
                                  <div className='receipt__item-info--bel'>Калории: {Math.floor((item.cal * foodInput) / 100)}</div>
                                  <div className='receipt__item-info--bel'>Белки: {Math.floor((item.bel * foodInput) / 100)}</div>
                                  <div className='receipt__item-info--bel'>Жиры: {Math.floor((item.fat * foodInput) / 100)}</div>
                                  <div className='receipt__item-info--bel'>Углеводы: {Math.floor((item.sug * foodInput) / 100)}</div>

                                  <div className='receipt__item-input'>
                                    <div className='receipt__item-input--text'>Введите количество грамм:</div>
                                    <input type='number' value={foodInput} onChange={foodInputHandler} />
                                    <div>г</div>
                                  </div>

                                  <div className='receipt__item--added'>Продукт успешно добавлен!</div>
                                </div>
                              </div>
                            )
                          })}
                        </>
                      ) : (
                        <div className='search--error'>Ничего не найдено</div>
                      )}
                    </>
                  ) : (
                    <>
                      {readyMeals.map((item, index) => {
                        return (
                          <div className='receipt__item' key={index} onClick={(e) => showFoodInfo(e.currentTarget)}>
                            <div className='receipt__item-group'>
                              <div className='receipt__item-name'>{item.name}</div>
                              <img src={foodAdd} alt='' onClick={(e) => addFood(e.currentTarget.parentNode.parentNode, item)} />
                            </div>
                            <div className='receipt__item-info'>
                              <div className='receipt__item-info--bel'>Калории: {Math.floor((item.cal * foodInput) / 100)}</div>
                              <div className='receipt__item-info--bel'>Белки: {Math.floor((item.bel * foodInput) / 100)}</div>
                              <div className='receipt__item-info--bel'>Жиры: {Math.floor((item.fat * foodInput) / 100)}</div>
                              <div className='receipt__item-info--bel'>Углеводы: {Math.floor((item.sug * foodInput) / 100)}</div>

                              <div className='receipt__item-input'>
                                <div className='receipt__item-input--text'>Введите количество грамм:</div>
                                <input type='number' value={foodInput} onChange={foodInputHandler} />
                                <div>г</div>
                              </div>

                              <div className='receipt__item--added'>Продукт успешно добавлен!</div>
                            </div>
                          </div>
                        )
                      })}
                    </>
                  )}
                </>
              )}

              <div style={{ height: '80px' }}></div>
            </div>
          </>
        )
      }
    } else {
      if (JSON.parse(localStorage.getItem('training')) === null) {
        return <div className='food--error'>Чтобы этот раздел стал доступен, Вам необходимо начать любую из тренировок</div>
      } else {
        return (
          <div className='food'>
            <div className='food__info'>
              <div className='container'>
                <div className='food__remaining'>
                  <div className='food__remaining-num'>{remainingCalc}</div>
                  <div className='food__remaining-text fz20'>осталось</div>
                  <div className='food__remaining-bar' style={{ marginBottom: '40px' }}>
                    <div className='food__remaining-bar--fill' style={{ width: remainingCalc === 0 ? '100%' : 100 - (remainingCalc * 100) / calc + '%' }}></div>
                  </div>

                  <div className='food__remaining-group'>
                    <div className='food__remaining-group-item'>
                      <div className='food__remaining-title'>Белки</div>
                      <div className='food__remaining-subtitle'>{bel} г</div>
                    </div>

                    <div className='food__remaining-group-item'>
                      <div className='food__remaining-title'>Жиры</div>
                      <div className='food__remaining-subtitle'>{fat} г</div>
                    </div>

                    <div className='food__remaining-group-item'>
                      <div className='food__remaining-title'>Углеводы</div>
                      <div className='food__remaining-subtitle'>{sug} г</div>
                    </div>
                  </div>

                  <button className='food__remaining-btn' onClick={() => setModalActive(true)}>
                    Подробности
                  </button>
                </div>

                <div className='food__receipt'>
                  <div className='food__title'>Приемы пищи</div>

                  <div className='food__receipt-grid'>
                    <div className='food__receipt-grid-item' onClick={(e) => setReceipt(e.currentTarget)}>
                      <div className='food__receipt-title'>Завтрак</div>
                      <div className='food__receipt-img'></div>
                      <div className='food__receipt-text'>Добавить</div>
                    </div>

                    <div className='food__receipt-grid-item' onClick={(e) => setReceipt(e.currentTarget)}>
                      <div className='food__receipt-title'>Обед</div>
                      <div className='food__receipt-img'></div>
                      <div className='food__receipt-text'>Добавить</div>
                    </div>

                    <div className='food__receipt-grid-item' onClick={(e) => setReceipt(e.currentTarget)}>
                      <div className='food__receipt-title'>Ужин</div>
                      <div className='food__receipt-img'></div>
                      <div className='food__receipt-text'>Добавить</div>
                    </div>

                    <div className='food__receipt-grid-item' onClick={(e) => setReceipt(e.currentTarget)}>
                      <div className='food__receipt-title'>Перекус</div>
                      <div className='food__receipt-img'></div>
                      <div className='food__receipt-text'>Добавить</div>
                    </div>
                  </div>
                </div>

                <div className='food__water'>
                  <div className='food__title'>Отслеживание выпитой воды</div>

                  <div className='food__water-title'>Вода</div>
                  <div className='food__water-liter'>{liters} Л</div>

                  <div className='food__water-glass-group'>
                    <div className='food__water-glass add' onClick={addGlass}></div>
                  </div>

                  <div className='food__water-warning'>Внимание, такое количество воды опасно для здоровья!</div>
                </div>
              </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
              <div className='food-modal__block'>
                <div className='food-modal__title'>Согласно персональному расчету калорий</div>
                <div className='food-modal__list'>
                  <div className={user.activity?.name === 'Поддерживать текущий вес' ? 'food-modal__list-item active' : 'food-modal__list-item'}>{calc} калорий, чтобы вес не менялся </div>
                  <div className={user.activity?.name === 'Похудеть' ? 'food-modal__list-item active' : 'food-modal__list-item'}>{Math.floor(calc * 0.85)} калорий, для похудения </div>
                  <div className={user.activity?.name === 'Похудеть быстро' ? 'food-modal__list-item active' : 'food-modal__list-item'}>{Math.floor(calc * 0.65)} калорий, чтобы похудеть быстро </div>
                </div>
              </div>

              <div className='food-modal__block'>
                <div className='food-modal__title'>Приемы пищи</div>
                <div className='food-modal__receipt'>
                  <div className='food-modal__receipt-nav'>
                    <div className={modalNavScreen === 1 ? 'food-modal__receipt-nav-item active' : 'food-modal__receipt-nav-item'} onClick={() => setModalNavActive(1)}>
                      Завтрак
                    </div>
                    <div className={modalNavScreen === 2 ? 'food-modal__receipt-nav-item active' : 'food-modal__receipt-nav-item'} onClick={() => setModalNavActive(2)}>
                      Обед
                    </div>
                    <div className={modalNavScreen === 3 ? 'food-modal__receipt-nav-item active' : 'food-modal__receipt-nav-item'} onClick={() => setModalNavActive(3)}>
                      Ужин
                    </div>
                    <div className={modalNavScreen === 4 ? 'food-modal__receipt-nav-item active' : 'food-modal__receipt-nav-item'} onClick={() => setModalNavActive(4)}>
                      Перекус
                    </div>
                    <div className='food-modal__receipt-nav--bg'></div>
                  </div>

                  <div className='food-modal__receipt-info'>
                    <div className='food-modal__receipt-info-item'>
                      <div>Калории</div>
                      <div className='food-modal__receipt-dots'></div>
                      <div>{userFoodWithDay[0]} ккал</div>
                    </div>

                    <div className='food-modal__receipt-info-item'>
                      <div>Углеводы</div>
                      <div className='food-modal__receipt-dots'></div>
                      <div>{userFoodWithDay[1]} г</div>
                    </div>

                    <div className='food-modal__receipt-info-item'>
                      <div>Белки</div>
                      <div className='food-modal__receipt-dots'></div>
                      <div>{userFoodWithDay[2]} г</div>
                    </div>

                    <div className='food-modal__receipt-info-item'>
                      <div>Жиры</div>
                      <div className='food-modal__receipt-dots'></div>
                      <div>{userFoodWithDay[3]} г</div>
                    </div>
                  </div>
                </div>
              </div>

              <button className='modal__btn' onClick={() => setModalActive(false)}>
                Закрыть
              </button>
            </Modal>
          </div>
        )
      }
    }
  }
}
