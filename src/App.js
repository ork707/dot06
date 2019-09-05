import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
function User(props) {
	return <p>{props.name}</p>;
  }
  function Useraddress(props) {
	return <p>{props.address}</p>;
  }
  function Maininfo(props) {
	return <li><a href="#">{props.info}</a></li>;
  }
  function Info(props) {
	return <li><a href="#">{props.info}</a><span>1</span></li>;
  }
  const HeadingItem = (props) => {
	const Heading = props.tagType
  
	return <Heading>{props.headingText}</Heading>
  }
  const DescriptionItem = (props) => {
	const Desc = props.tagType
  
	return <Desc>{props.descriptionText}</Desc>
  }
  
  const SectionItem = (props) => (
	<div className='box'>
	  <HeadingItem
		headingText={props.headingText}
		tagType={props.headingTagType}
	  />
  
	  <DescriptionItem
		descriptionText={props.descriptionText}
		tagType={props.descriptionTagType}
	  />
	<svg width="45" height="16" viewBox="0 0 45 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7071 8.70711C45.0976 8.31659 45.0976 7.68342 44.7071 7.2929L38.3431 0.928936C37.9526 0.538412 37.3195 0.538412 36.9289 0.928936C36.5384 1.31946 36.5384 1.95263 36.9289 2.34315L42.5858 8L36.9289 13.6569C36.5384 14.0474 36.5384 14.6805 36.9289 15.0711C37.3195 15.4616 37.9526 15.4616 38.3431 15.0711L44.7071 8.70711ZM-1.09278e-07 9L44 9L44 7L1.09278e-07 7L-1.09278e-07 9Z" fill="#528290"/>
</svg>
	</div>
  )
function App() {
  return (
    <div className="wrapper">
      <aside className="aside">
    <div className="left_sidebar">
    <div className="img_item"><img src="img/Ellipse.png" alt=""/></div>
            <div className="title_item">
              <User name="Александр" />
			  <Useraddress address="Лесной проспект 26, парадная 3, квартира 136" />
            </div>
            <div className="bar1"></div>
            <div className="info_title">
            <ul>
            <Maininfo info= "Внести показания счетчиков"/>
            <Maininfo info= "Оплатить квитанции"/>
            <Maininfo info= "Заказать услуги"/>
            </ul>
          </div>
          <div className="bar2"></div>
           <div className="info_string">
             <ul>
             <Info info= "Мои обращения"/>
             <Maininfo info= "Новости дома"/>
             <Maininfo info= "Опросы"/>
             </ul>
           </div>
  <div className="footer">
  <User name="Выйти" />
    <a href=" https://vk.com"><img src="img/Vector_1.png" alt=""/></a>
    <a href=" https://www.instagram.com"><img src="img/insta.png" width="19px" height="15px" alt=""/></a>
    <a href=" https://www.facebook.com"><img src="img/Vector_3.png" alt=""/></a>
  </div>
  </div>			
  </aside>
  <main className="main"> 
		<div className="wrapp">
		<header>
			<div className="navigate">
				<nav>
					<ul>
						<Maininfo info= "О компании"/>
						<Maininfo info= "Услуги"/>
						<Maininfo info= "Информация"/>
						<Maininfo info= "Новости"/>
						<Maininfo info= "FAQ"/>
						<Maininfo info= "Контакты"/>
					</ul>
				</nav>
			</div>
		</header>
		<section>
			<div className="main_title">
				<h2>Услуги</h2>
			</div>
			<div className="nav">
				<nav>
					<ul>
						<Maininfo info= "Все"/>
						<Maininfo info= "Безопасность"/>
						<Maininfo info= "Ремонт"/>
						<Maininfo info= "Уборка"/>
						<Maininfo info= "Уход за животными"/>
						<Maininfo info= "Паркинг"/>
					</ul>
				</nav>
			</div>
			<div className="blockinfo">
				
			<SectionItem
             headingText='Услуги электрика'
             headingTagType='p'
             descriptionText='Замена розеток, проверка проводки, установка люстр и др.'
	         descriptionTagType='p'
              />
			   
			   <SectionItem
             headingText='Услуги сантехника'
             headingTagType='p'
             descriptionText='Установка/замена раковины и унитаза, устранение засоров и др.'
	         descriptionTagType='p'
              />  
				
				<SectionItem
             headingText='Ремонт квартиры'
             headingTagType='p'
             descriptionText='Типовая и авторская отделки для вашей квартиры'
	         descriptionTagType='p'
              /> 
				
				<SectionItem
             headingText='Клининг'
             headingTagType='p'
             descriptionText='Чистка ковров и мебели, промышленный альпинизм и др.'
	         descriptionTagType='p'
              /> 
				
				<SectionItem
             headingText='Охрана квартиры'
             headingTagType='p'
             descriptionText='Датчик движения, датчик утечки газа, тревожная кнопка и др.'
	         descriptionTagType='p'
              />
				
				<SectionItem
             headingText='Выгул собак'
             headingTagType='p'
             descriptionText='Полноценная забота о вашем питомце до, во время и после прогулки'
	         descriptionTagType='p'
              />
			
				
			</div>
		</section>
		
	</div>
	</main>

  </div>  
	 
  ); 
}  
  export default App;