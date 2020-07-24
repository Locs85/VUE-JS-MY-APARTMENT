<template>
    <div>
         <div class="wrapper">
      <div class="wrapper__page">
        <section class="navbar navbar_simple">
          <div class="navbar__container">
            <div><a class="navbar__logo" href="#">
                <div class="navbar__logo-icon"></div>
                <div class="navbar__logo-text">Моя Квартира</div></a></div>
          </div>
        </section>
        <article>
          <section class="article-caption">
            <h1 class="article-caption__text">Инструкция для собственника помещения в МКД по голосованию на общем собрании собственников жилья в многоквартирном доме с использованием информационной системы «Моя Квартира»</h1>
          </section>
          <section class="article-content">
            <p>Эта инструкция объясняет, как скачать мобильное приложение «Моя Квартира» и пользоваться им для голосования на общем собрании собственников жилья в многоквартирном доме с использованием информационной системы.</p>
            <ol>
              <li>Зайдите в Google Play и скачайте <a href="https://play.google.com/store/apps/details?id=ru.roskvartal.myapartment">мобильное приложение «Моя Квартира»</a> .</li>
              <li>Приложение «Моя Квартира» установится автоматически.</li>
              <li>Добавьте в приложение адрес своего дома: наберите адрес вручную или дайте согласие на определение адреса по вашему местоположению.</li>
              <li>Добавьте в приложение номер своей квартиры (помещения).</li>
              <li>Войдите в раздел «Голосования», чтобы увидеть список голосований на ОСС.<img class="article-content__illustration" src="img/01.png" alt=""></li>
              <li>Выберите нужное голосование и подтвердите вашу личность, написав номер телефона или адрес электронной почты, которые вы указали в заявлении.<img class="article-content__illustration" src="img/02.png" alt=""></li>
              <li>Введите код, который вы получили по смс или email.<img class="article-content__illustration" src="img/05.png" alt=""></li>
              <li>Ознакомьтесь с вопросами, включёнными в повестку дня.<img class="article-content__illustration" src="img/06.png" alt=""></li>
              <li>Изучите прикреплённые к отдельным вопросам или ко всему собранию документы.<img class="article-content__illustration" src="img/07.png" alt=""></li>
              <li>Проголосуйте по всем вопросам сразу или пропустите какой-либо вопрос, чтобы вернуться к нему позже. Промежуточные результаты голосования сохраняются.<img class="article-content__illustration" src="img/09.png" alt=""></li>
              <li>После принятия решения по всем вопросам вы можете посмотреть промежуточные результаты и отправить результаты голосования администратору ОСС. Для этого нажмите кнопку «Подтвердить». Приложение покажет, что ваш голос учтён.<img class="article-content__illustration" src="img/14.png" alt=""></li>
            </ol>
            <p>После того, как собрание закончится, вы сможете посмотреть результаты голосования.</p>
          </section>
        </article>
      </div>
    </div>
    </div>
</template>


<script>
    
    export default {
        data() {
            return {
                
            }
        }
    }
    
</script>




<style lang="scss">
// WRAPPER
.wrapper {
	display: -webkit-box;
	display: -moz-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	flex: 1;
	min-height: 100%;
	padding: 2rem 0;
	&__page {
		width: 60%;
		min-height: 100%;
		-webkit-box-shadow: 0 0 20px -3px;
		box-shadow: 0 0 20px -3px;
		padding: 1.875rem 3.125rem;
	}
}
// WRAPPER

// ARTICLE CONTENT
.article-caption {
	&__text {
		font-family: PTSans-Bold;
		text-align: center;
		font-size: 1.125rem;
		margin-top: 3rem;

	}
}
.article-content {
	font-family: PTSans-Regular;
	font-size: 1rem;
	line-height: 1.5em;
	color: #333333;
	&__title {
		text-align: center;
		font-size: 1rem;
	}
	&__subtitle {
		text-align: left;
	}
	&__illustration {
		display: block;
		max-width: 230px;
		margin: 1.5rem auto;

	}
	p {
		margin: 1.5rem 0;
	}
	&__paragraph {
		margin: 1.5rem 0;
		&:before {
			counter-increment: paragraph;
			content: counter(paragraph) ".";
		}
	}
	a {
		color: #0f6cbc;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	ol {
		list-style: none;
		li {
			&>ul {
				list-style: none;
			}
		}
	}
	ul,
	ol {
		&>li {
			margin: 0.5rem 0;
			list-style-position: inside;
		}
	}
}
// ARTICLE CONTENT

// MEDIA QUERIES
@media (max-width: 1500px) {
	// WRAPPER
	.wrapper {
		&__page {
			width: 85%;
		}
	}
	// WRAPPER
}
@media (max-width: 1400px) {
	// WRAPPER
	.wrapper {
		&__page {
			width: 90%;
		}
	}
	// WRAPPER
}
@media (max-width: 1300px) {
	// WRAPPER
	.wrapper {
		&__page {
			width: 95%;
		}
	}
	// WRAPPER
}
@media (max-width: 992px) {
	// WRAPPER
	.wrapper {
		&__page {
			width: 90%;
		}
	}
	// WRAPPER
}
@media (max-width: 568px) {
	// WRAPPER
	.wrapper {
		padding: 1rem 0;
		&__page {
			width: 95%;
			padding: 1.875rem 1.2rem;
		}
	}
	// WRAPPER
	// ARTICLE CONTENT
	.article-caption {
		&__text {
			margin-top: 1.5rem;
		}
	}
	// ARTICLE CONTENT
}
// MEDIA QUERIES
</style>