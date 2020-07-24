<template>
   <div>
   <section class="navbar">
      <div class="navbar__container">
        <div><a class="navbar__logo" href="#">
            <div class="navbar__logo-icon"></div>
            <div class="navbar__logo-text">Моя Квартира</div></a>
          <div class="navbar__dropdown-menu">
            <button class="navbar__dropdown-btn"><i class="fa fa-th" aria-hidden="true"></i></button>
          </div>
        </div>
        <div>
          <div class="navbar__hamburger" @click="openMenu()"><span></span><span></span><span></span></div>
          <div class="navbar__menu" :class="{show: isMenuOpen}">
            <ul>
              <li>
                  <router-link class="navbar__menu-link" to="rules">
                      <span>Правила</span>
                      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  </router-link>
              </li>
              <li>
                  <router-link class="navbar__menu-link" to="instruction">
                      <span>Инструкция</span>
                      <i class="fa fa-question-circle" aria-hidden="true"></i>
                  </router-link>
              </li>
              <li>
                  <router-link class="navbar__menu-link" to="agreement">
                      <span>Соглашение</span>
                      <i class="fa fa-handshake-o" aria-hidden="true"></i>
                  </router-link>
              </li>
            </ul>
            <div class="navbar__login"><a class="navbar__login-btn" href="#">Войти</a><a class="navbar__login-icon" href="#"><i class="navbar__login-btn-icon fa fa-sign-in" aria-hidden="true"></i></a></div>
          </div>
        </div>
      </div>
    </section>
    <section class="header">
      <div class="header__container">
        <div>
          <div class="header__card">
            <div class="header__card-body">
              <h1 class="header__card-title">Приложение для решения текущих вопросов по дому онлайн</h1>
              <p class="header__card-text">Поможет решить проблемы жителей дома в режиме реального времени, без дополнительных визитов и звонков в управляющую организацию</p>
              <div class="header__card-btns">
                <div><a class="header__card-btn header__card-btn_rose" href="#">попробовать бесплатно</a></div>
                <div><a class="header__card-btn header__card-btn_image" href="#"></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="about__container">
        <div>
          <div class="about__card">
            <div class="about__card-body">
              <div class="about__card-image"><img src="../assets/img/003-mails.svg" alt=""></div>
              <h5 class="about__card-title">Информационная система</h5>
              <p class="about__card-text">для улучшения коммуникации между жителями МКД и управляющей организацией</p>
            </div>
          </div>
        </div>
        <div>
          <div class="about__card">
            <div class="about__card-body">
              <div class="about__card-image"><img src="../assets/img/002-multiple-users.svg" alt=""></div>
              <h5 class="about__card-title">Обменивайтесь</h5>
              <p class="about__card-text">с жителями МКД информацией и оперативно решайте вопросы управления МКД</p>
            </div>
          </div>
        </div>
        <div>
          <div class="about__card">
            <div class="about__card-body">
              <div class="about__card-image"><img src="../assets/img/001-conversation.svg" alt=""></div>
              <h5 class="about__card-title">Общайтесь</h5>
              <p class="about__card-text">с управляющей организацией и ТСЖ, участвуйте в управлении своим домом</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="who-can-use">
      <div class="who-can-use__container">
        <div class="who-can-use__caption">
          <div class="who-can-use__caption-text">Кто может пользоваться</div>
          <div class="who-can-use__caption-users">
            <div class="who-can-use__caption-line"></div>
            <div class="who-can-use__caption-icon"></div>
          </div>
        </div>
        <div class="who-can-use__block">
          <div class="who-can-use__block-image-col">
            <div class="who-can-use__block-image"><img class="mkd" src="../assets/img/img_mnogokvartir.svg" alt=""></div>
          </div>
          <div class="who-can-use__block-card-col">
            <div class="who-can-use__block-card-container">
              <div class="who-can-use__block-card">
                <div class="who-can-use__block-card-body">
                  <h5 class="who-can-use__block-card-title">Жители многоквартирных домов</h5>
                  <ul>
                    <li>Получение сведений о квартире, доме, лицевом счёте и управляющей организации</li>
                    <li>Отправка обращений или вопроса в управляющую организацию, ТСЖ или ЖСК</li>
                    <li>Передача показаний счётчиков</li>
                    <li>Вызов аварийной службы</li>
                    <li>Запись на приём к руководителю управляющей организации</li>
                    <li>Новости дома и района</li>
                    <li>Публикация объявлений для жителей вашего дома</li>
                    <li>Отправка заявок на устранение проблемы и оценка качества её выполнения</li>
                    <li>Организация совместных мероприятий с управляющей организацией</li>
                  </ul>
                  <div class="who-can-use__block-card-btns"><a class="who-can-use__block-card-btn" href="#">зарегистрировать личный кабинет</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="who-can-use__block">
          <div class="who-can-use__block-card-col">
            <div class="who-can-use__block-card-container">
              <div class="who-can-use__block-card">
                <div class="who-can-use__block-card-body">
                  <h5 class="who-can-use__block-card-title">Управляющие организации и ТСЖ</h5>
                  <ul>
                    <li>Быстрое и надёжное информирование жителей МКД</li>
                    <li>Работа с обращениями</li>
                    <li>Возможность прикрепления фото- и видеоматериалов</li>
                    <li>Получение заявок на выполнение работ</li>
                    <li>Обратная связь от жителей МКД</li>
                    <li>Контроль потребления коммуналных ресурсов</li>
                    <li>Предложение дополнительных платных услуг УО</li>
                    <li>Размещение новостей и отчётов</li>
                    <li>Автоматическая синхронизация вашего сайта с ГИС ЖКХ</li>
                    <li>Приём оплаты за ЖКУ</li>
                  </ul>
                  <div class="who-can-use__block-card-btns"><a class="who-can-use__block-card-btn" href="#">зарегистрироваться</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="who-can-use__block-image-col">
            <div class="who-can-use__block-image"><img class="uo-tsj" src="../assets/img/img_upr_company.svg" alt=""></div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="footer__blocks">
        <div class="footer__container">
          <div>
            <div class="footer__blocks-btns">
              <div><a class="footer__blocks-btns-lk" href="#">Личный кабинет</a></div>
              <div><a class="footer__blocks-btns-question" href="#">Задать вопрос</a></div>
              <div><a class="footer__blocks-btns-email" href="#">Письмо директору</a></div>
              <div><a class="footer__blocks-btns-sitemap" href="#"><i class="fa fa-sitemap" aria-hidden="true"></i></a></div>
            </div>
          </div>
          <div>
            <div class="footer__blocks-list">
              <h5>Компания</h5>
              <ul>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Команда</a></li>
                <li><a href="#">Работа у нас</a></li>
                <li><a href="#">Часто задаваемые вопросы</a></li>
                <li><a href="#">Материалы для СМИ</a></li>
                <li><a href="#">Официальные документы</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div class="footer__blocks-list">
              <h5>Услуги</h5>
              <ul>
                <li><a href="#">ГИС ЖКХ</a></li>
                <li><a href="#">Реформа ЖКХ</a></li>
                <li><a href="#">Снижение ОДН</a></li>
                <li><a href="#">Проведение ОСС</a></li>
                <li><a href="#">Сайт для УК/ТСЖ</a></li>
                <li><a href="#">Юридическая поддержка</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div class="footer__blocks-list">
              <h5>Полезные сервисы</h5>
              <ul>
                <li><a href="#">Портал</a></li>
                <li><a href="#">Сервис «ОСС на 100%»</a></li>
                <li><a href="#">Сообщество «Про ЖКХ»</a></li>
                <li><a href="#">Онлайн-школа ЖКХ</a></li>
                <li><a href="#">Лицензионный тест УК</a></li>
                <li><a href="#">Новый вебинар для УК/ТСЖ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__container">
          <div>
            <div class="footer__bottom-social">
              <ul>
                <li><a href="#"><img src="../assets/img/vk.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/img/facebook.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/img/odnoklassniki.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/img/youtube.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/img/twitter.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/img/viber.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/img/telegram.svg" alt=""></a></li>
                <li><a href="#"><img src="../assets/img/yandex-zen.png" alt=""></a></li>
              </ul>
            </div>
          </div>
          <div>
            <div class="footer__bottom-email">
              <p>Наша почта:</p><a href="mailto:mail@roskvartal.ru">mail@roskvartal.ru</a>
            </div>
          </div>
          <div>
            <div class="footer__bottom-phone">
              <div>
                <p>Бесплатный звонок <br />по всей территории России</p>
              </div>
              <div>
                <div class="footer__bottom-phone-number">8 800 500-65-61</div>
              </div>
            </div>
          </div>
          <div>
            <div class="footer__bottom-btn"><a href="#">Заказать звонок</a></div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                isMenuOpen: false
            }
        },
        methods: {
            openMenu() {
                (this.isMenuOpen == false) ? this.isMenuOpen = true : this.isMenuOpen = false;
            }
        }
    }
</script>


<style lang="scss">
// NAVBAR
.navbar {
	display: -webkit-box;
	display: -moz-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	padding: 1.2rem 0;
	-webkit-box-shadow: 0 1px 6px 0 rgba(0,0,0,.14);
	box-shadow: 0 1px 6px 0 rgba(0,0,0,.14);
	z-index: 9999;
	&__hamburger {
		cursor: pointer;
		display: none;
		&>span {
			display: block;
			width: 25px;
			height: 3px;
			background: #1f56ee;
			margin: 5px 0;
		}
	}
	&_simple {
		box-shadow: none;
		.navbar__container {
			flex-direction: column;
			align-items: flex-start;
		}
	}
	&__container {
		width: 95%;
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		&>div {
			flex: auto;
			&:first-child {
				display: -webkit-box;
				display: -moz-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}
			&:last-child {
				display: -webkit-box;
				display: -moz-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}
		}
	}
	&__logo {
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		text-decoration: none;
		font-family: PTSans-Bold;
		&-icon {
			// background-image: url('//176428.selcdn.ru/RosKvartal.CDN/Portal.Web/images/service-icon5.png');
			background-image: url('../assets/img/service-icon5.png');
			background-repeat: no-repeat;
			display: inline-block;
			background-size: 200px;
			background-position: -80px -240px;
			width: 40px;
			height: 40px;
			margin-right: 10px;
		}
		&-text {
			color: #333333;
			font-size: 1.5rem;
		}
	}
	&__dropdown-btn {
		border: none;
		background: none;
		color: gray;
		font-size: 1.1rem;
		padding: 0;
		cursor: pointer;
		margin-left: 1rem;
		&>i {
			position: relative;
			top: 3px;
		}
	}
	&__menu {
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		-webkit-transition: display 0.2s ease-in-out;
		transition: display 0.2s ease-in-out;
		&>ul {
			list-style: none;
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			li {
				padding: 0 1rem;
				a {
					color: #333333;
					font-family: PTSans-Regular;
					text-decoration: none;
				}
				i {
					display: none;
					font-size: 1.563rem;
					color: #333333;

				}
			}
		}
		&.show {
			display: flex!important;
		}
	}
	&__login {
		&-btn {
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			width: 9rem;
			height: 3rem;
			border-radius: 1.875rem;
			background: none;
			overflow: hidden;
			cursor: pointer;
			margin-left: 1.875rem;
			border: 2px solid #1f56ee;
			background: #ffffff;
			text-align: center;
			font-family: PTSans-Bold;
			font-size: 1rem;
			text-transform: uppercase;
			-webkit-transition: background 0.2s ease-in-out;
			transition: background 0.2s ease-in-out;
			&:hover {
				background: #1f56ee;
				color: #ffffff;
			}
		}
		&-icon {
			display: none;
			font-size: 1.563rem;
			color: #1f56ee;
		}
	}

}
// NAVBAR
// HEADER
.header {
	display: -webkit-box;
	display: -moz-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	min-height: 502px;
	margin-top: 1rem;
	padding-bottom: 1rem;
	background: url('../assets/img/header-bg.jpg') no-repeat center center;
	background-size: cover;
	&__container {
		width: 70%;
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: left;
		align-items: center;
	}
	&__card {
		width: 55%;
		&-body {
			padding: 1rem;
			width: 100%;
		}
		&-title {
			font-family: PTSans-Regular;
			font-size: 2.125rem;
			margin-bottom: 1rem;
		}
		&-text {
			font-size: 1.313rem;
			font-family: PTSans-Regular;
		}
		&-btns {
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			margin-top: 3rem;
		}
		&-btn {
			display: block;
			color: #ffffff;
			text-align: center;
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0.25rem;
			text-decoration: none;
			text-transform: uppercase;
			font-family: PTSans-Bold;
			font-size: 0.938rem;
			&_rose {
				min-width: 15rem;
				height: 3.125rem;
				background: #e12351;
				margin-right: 0.625rem;
			}
			&_image {
				min-width: 12rem;
				height: 3.125rem;
				background: url('../assets/img/google-play.png') no-repeat center center;
				background-size: cover;
			}
		}
	}
}
// HEADER

// ABOUT
.about {
	display: -webkit-box;
	display: -moz-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	padding: 7rem 0;
	// height: 512px;
	background-image: radial-gradient(
        circle farthest-side at center bottom,
        #0091d7,
        #004094 100%
	);
	&__container {
		width: 70%;
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		&>div {
			height: 100%;
		}
	}
	&__card {
		color: #ffffff;
		font-family: PTSans-Regular;
		height: 100%;
		&-body {
			padding: 1rem;
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
		&-image {
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 5.75rem;
			height: 5.75rem;
			border-radius: 100%;
			background: #ffffff;
			margin-bottom: 1rem;
		}
		img {
			width: 53px;
			height: 53px;
		}
		&-title {
			font-size: 1.625rem;
			margin-bottom: 0.5rem;
		}
		&-text {
			font-size: 1.188rem;
		}
	}
}
// ABOUT

// WHO CAN USE
.who-can-use {
	display: -webkit-box;
	display: -moz-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	padding: 5rem 0;
	&__container {
		width: 70%;
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
	}
	&__caption {
		text-align: center;
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		flex-direction: column;
		align-items: center;
		&-text {
			font-family: PTSans-Regular;
			color: #333333;
			text-transform: uppercase;
			font-size: 2.125rem;
			font-weight: 700;
			margin-bottom: 1rem;
		}
		&-users {
			position: relative;
			min-width: 540px;
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			justify-content: center;
		}
		&-icon {
			background: #ffffff url('../assets/img/users-solid.svg') no-repeat center center;
			width: 100px;
			height: 44px;
			background-size: contain;
			z-index: 2;
		}
		&-line {
			background-color: #de2b41;
			height: 2px;
			display: block;
			position: absolute;
			top: 25px;
			width: 100%;
			z-index: 2;
		}
	}
	&__block {
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		margin-bottom: 2rem;
		&-image-col {
			width: 45%;
		}
		&-image {
			img {
				&.mkd {
					height: 676px;
					width: 331px;
				}
				&.uo-tsj {
					height: 546px;
				}
			}

		}
		&-card-container {
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			align-items: center;
			height: 100%;
		}
		&-card-col {
			width: 55%;
		}
		&-card {
			font-family: PTSans-Regular;
			width: 100%;
			&-title {
				color: #046ab4;
				font-weight: 700;
				font-size: 1.688rem;
				margin-bottom: 1rem;
			}
			ul {
				list-style: none;
				li {
					&:before {
						content: "—";
						margin-right: 10px;
						font-size: 1.125rem;
						line-height: 2.063rem;
					}
				}
			}
			&-btns {
				display: -webkit-box;
				display: -moz-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				justify-content: flex-start;
			}
			&-btn{
				color: #ffffff;
				text-align: center;
				display: -webkit-box;
				display: -moz-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 0.25rem;
				text-decoration: none;
				text-transform: uppercase;
				font-family: PTSans-Bold;
				font-size: 0.938rem;
				height: 3.125rem;
				padding: 0 28px;
				background: #e12351;
				margin-top: 2rem;
			}
		}
	}
}
// WHO CAN USE

// FOOTER
.footer {
	&__blocks {
		background: #006bb7;
		width: 100%;
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: center;
		padding: 2rem 0;
		&-list {
			font-family: PTSans-Regular;
			margin-top: 1rem;
			h5 {
				font-size: 1rem;
				text-transform: uppercase;
				color: #ffffff;
				font-weight: 700;
				margin-bottom: 1rem;
			}
			ul {
				list-style: none;
				li {
					margin-bottom: 0.313rem;
					a {
						color: #cccccc;
						text-decoration: none;
						font-size: 1rem;
						&:hover {
							color: #ffffff;
						}
					}
				}
			}
		}
		&-btns {
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			font-family: PTSans-Regular;
			&>div {
				margin-bottom: 1rem;
			}
			&-lk {
				display: -webkit-box;
				display: -moz-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				justify-content: center;
				align-items: center;
				width: auto;
				height: 3rem;
				padding: 0.625rem 1.25rem;
				border-radius: 1.875rem;
				background: none;
				cursor: pointer;
				border: 1px solid #ffffff;
				color: #ffffff;
				text-decoration: none;
				text-align: center;
				font-size: 1.375rem;
				-webkit-transition: background 0.2s ease-in-out;
				transition: background 0.2s ease-in-out;
				&:hover {
					background: #2a3c4e;
					color: #ffffff;
				}
			}
			&-question {
				color: #cccccc;
				font-size: 1.25rem;
				text-decoration: none;
				&:hover {
					color: #ffffff;
				}
			}
			&-email {
				color: #cccccc;
				font-size: 1rem;
				text-decoration: none;
				&:hover {
					color: #ffffff;
				}
			}
			&-sitemap {
				color: #cccccc;
				text-decoration: none;
				font-size: 1rem;
				&:hover {
					color: #ffffff;
				}
			}
		}
	}
	&__bottom {
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: center;
		padding: 2rem 0;
		background: #2a3c4e;
		&-social {
			margin-right: 0.5rem;
			ul {
				list-style: none;
				display: -webkit-box;
				display: -moz-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				justify-content: space-between;
				li {
					margin-right: 1rem;
					&:last-child {
						margin-right: 0;
					}
					a {
						display: -webkit-box;
						display: -moz-box;
						display: -webkit-flex;
						display: -ms-flexbox;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 12px;
						width: 32px;
						height: 32px;
						img {
							max-width: 100%;
						}
					}
				}
			}
		}
		&-email {
			font-family: PTSans-Regular;
			margin-right: 0.5rem;
			p {
				color: #979797;
			}
			a {
				color: #ffffff;
			}
		}
		&-phone {
			font-family: PTSans-Regular;
			display: -webkit-box;
			display: -moz-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			align-items: center;
			margin-right: 0.5rem;
			p {
				color: #979797;
				text-align: right;
			}
			&-number {
				font-size: 2rem;
				color: #ffffff;
				margin-left: 1rem;
			}
		}
		&-btn {
			font-family: PTSans-Regular;
			&>a {
				display: block;
				background: #007be5;
				color: #ffffff;
				text-decoration: none;
				padding: 0.625rem 1.25rem;
				border-radius: 0.25rem;
				font-size: 0.875rem;
				font-weight: 700;
				text-align: center;
			}
		}
	}
	&__container {
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		width: 70%;
	}
}
// FOOTER
    
    
// MEDIA QUERIES
@media (max-width: 1500px) {
	// HEADER
	.header {
		&__container {
			width: 85%;
		}
		&__card {
			width: 65%;
		}
	}
	// HEADER

	// ABOUT
	.about {
		&__container {
			width: 85%;
		}
	}
	// ABOUT

	// WHO CAN USE
	.who-can-use {
		&__container {
			width: 85%;
		}
	}
	// WHO CAN USE
	// FOOTER
	.footer {
		&__container {
			width: 85%;
		}
	}
	// FOOTER
}
@media (max-width: 1400px) {
	// HEADER
	.header {
		&__container {
			width: 90%;
		}
	}
	// HEADER
	// ABOUT
	.about {
		&__container {
			width: 90%;
		}
	}
	// ABOUT
	// WHO CAN USE
	.who-can-use {
		&__container {
			width: 90%;
		}
		&__block {
			&-image {
				img {
					&.uo-tsj {
						height: 480px;
					}
				}
			}
		}
	}
	// WHO CAN USE
	// FOOTER
	.footer {
		&__container {
			width: 90%;
		}
		&__bottom {
			&-phone {
				&-number {
					font-size: 1.3rem;
				}
			}
		}
	}
	// FOOTER
}
@media (max-width: 1300px) {
	// HEADER
	.header {
		&__container {
			width: 95%;
		}
		&__card {
			width: 65%;
		}
	}
	// HEADER
	// ABOUT
	.about {
		&__container {
			width: 95%;
		}
	}
	// ABOUT
	// WHO CAN USE
	.who-can-use {
		&__container {
			width: 95%;
		}
	}
	// WHO CAN USE
	// FOOTER
	.footer {
		&__container {
			width: 95%;
		}
		&__bottom {
			&-phone {
				&-number {
					font-size: 1.3rem;
				}
			}
		}
	}
	// FOOTER
}
@media (max-width: 1200px) {
	// WHO CAN USE
	.who-can-use {
		&__block {
			&-image {
				overflow-x: hidden;
			}
		}
	}
	// WHO CAN USE
	// FOOTER
	.footer {
		&__bottom {
			&>div {
				flex-direction: column;
				align-items: center;
				&>div {
					margin-bottom: 1rem;
					&:last-child {
						margin-bottom: 0;
					}
				}
			}
			&-email {
				text-align: center;
			}
			&-phone {
				flex-direction: column;
				align-items: center;
				p {
					text-align: center;
				}
				&-number {
					text-align: center;
				}
			}
		}
	}
	// FOOTER
}
@media (max-width: 992px) {
	// NAVBAR
	.navbar {
		&_simple {
			.navbar__container {
				align-items: center;
			}
		}
	}
	// NAVBAR
	// HEADER
	.header {
		&__container {
			width: 90%;
		}
		&__card {
			width: 70%;
		}
	}
	// HEADER
	// ABOUT
	.about {
		&__container {
			flex-direction: column;
			width: 90%;
			&>div {
				margin-bottom: 1rem;
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
	// ABOUT
	// WHO CAN USE
	.who-can-use {
		&__container {
			width: 90%;
		}
	}
	// WHO CAN USE
	// FOOTER
	.footer {
		&__blocks {
			&>div {
				flex-direction: column;
				align-items: center;
			}
			&-btns {
				align-items: center;
				text-align: center;
			}
			&-list {
				h5 {
					text-align: center;
				}
				ul {
					text-align: center;
				}
			}
		}
	}
	// FOOTER
}
@media (max-width: 900px) {
	// NAVBAR
	.navbar {
		position: relative;
		&__container {
			width: 92%;
		}
		&__hamburger {
			display: block;
		}
		&__menu {
			display: none;
			justify-content: space-between;
			top: 79px;
			left: 0;
			position: absolute;
			width: 100%;
			background: #EFF9FF;
			padding: 1.1rem 1.5rem;
			z-index: 9999;
		}
		&__dropdown-btn {
			display: none;
		}
	}
	// NAVBAR
	// WHO CAN USE
	.who-can-use {
		&__block {
			flex-direction: column;
			margin: 2rem 0;
			align-items: center;
			&:nth-child(3n) {
				flex-direction: column-reverse;
			}
			&:last-child {
				margin-bottom: 0;
			}
			&-card {
				&-title {
					text-align: center;
				}
				&-btns {
					justify-content: center;
				}
			}
			&-image-col {
				width: 90%;
			}
			&-card-col {
				width: 90%;
			}
			&-image {
				display: -webkit-box;
				display: -moz-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				justify-content: center;
				margin-bottom: 1.5rem;
			}
			
		}
	}
	// WHO CAN USE
}
@media (max-width: 600px) {
	// NAVBAR
	.navbar {
		&__menu {
			&>ul {
				li {
					a {
						&>span {
							display: none;
						}
						&>i {
							display: block;
						}
					}
				}
			}

		}
		&__login {
			&-btn {
				display: none;
			}
			&-icon {
				display: block;
			}
		}
	}
	// NAVBAR
}
@media (max-width: 768px) {
	// HEADER
	.header {
		&__container {
			width: 95%;
		}
		&__card {
			width: 90%;
		}
	}
	// HEADER
	// WHO CAN USE
	.who-can-use {
		&__block {
			&-image {
				img {
					&.mkd {
						height: 500px;
					}
					&.uo-tsj {
						height: 500px;
					}
				}
			}
		}
	}
	// WHO CAN USE
}
@media (max-width: 568px) {
	// ARTICLE CONTENT
	.article-caption {
		&__text {
			margin-top: 1.5rem;
		}
	}
	// ARTICLE CONTENT
	// NAVBAR
	.navbar {
		&__container {
			width: 90%;
		}
	}
	// NAVBAR
	// HEADER
	.header {
		&__card {
			width: 100%;
			&-title {
				text-align: center;
				font-size: 2rem;
			}
			&-text {
				text-align: center;
			}
			&-btns {
				flex-direction: column;
				align-items: center;
				&>div {
					flex: 1;
					margin-bottom: 1rem;
					width: auto;

				}
			}
			&-btn {
				font-size: 0.700rem;
				&_rose {
					width: 100%;
					margin-right: 0;
					padding: 1rem;
				}
				&_image {
					display: block;
					width: 100%;
					background-size: 120%;
					padding: 1rem;
				}
			}
		}
	}
	// HEADER
	// WHO CAN USE
	.who-can-use {
		&__caption {
			&-text {
				font-size: 1.8rem;
			}
			&-users {
				min-width: 100%
			}
		}
		&__block {
			&-image {
				img {
					&.mkd {
						height: 400px;
					}
					&.uo-tsj {
						height: 400px;
					}
				}
			}
			&-card {
				&-btn {
					font-size: 0.700rem;
				}
			}
		}
	}
	// WHO CAN USE
	// FOOTER
	.footer {
		&__blocks {
			&-btns {
				&-lk {
					font-size: 1.100rem;
				}
			}
		}
		&__bottom {
			&-social {
				ul {
					flex-direction: column;
					align-items: center;
					&>li {
						margin-right: 0;
						margin-bottom: 1rem;
					}
				}
			}
		}
	}
	// FOOTER
}
// MEDIA QUERIES
</style>