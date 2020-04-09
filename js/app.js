// select and tabs 9-04-2020
{
  const [
    $, 
    $$
  ] = [
    document.querySelector.bind(document), 
    document.querySelectorAll.bind(document)
  ];

  const [
    hosting, tabs, articles, articleFirst, uls
  ] = [
    $('#hosting select'), 
    $$('.tab'), 
    $$('#hosting article'), 
    $$('#hosting article:first-child'), 
    $$('#hosting ul')
  ];

  // всі блоки, крім першого в нон
  tabs.forEach((tab, i) => {
    if (i !== 0) tab.style.display = 'none';
  });

  // приховуємо усі блоки
  articles.forEach(item => item.style.display = 'none');

  // усі перші блоки у вкладці зробити блочними
  articleFirst.forEach(item => item.style.display = 'block');  

  // показ блоків по зміні селекту
  hosting.addEventListener('change', function() {
    tabs.forEach((tab, i) => {     
      tab.style.display = 'none';
      if (this.selectedIndex === i){
        tab.style.display = 'block';
      }
    });
    blocks(this.selectedIndex);
  });

  // викликаємо функцію для дефолтного блоку
  blocks();

  // обробка кліків по вкладках
  function blocks(num = 0){
    const arr = [...uls[num].children];
    [...uls[num].children].forEach((li, index) => {
        li.addEventListener('click', function(){
          const articles = [...this.parentNode.nextElementSibling.children];
          articles.forEach((item, i) => {
            item.style.display = 'none';
            if(index === i) item.style.display = 'block';
          });
        });
      });
  }

}