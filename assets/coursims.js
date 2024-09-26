//המערך של רשימת הקורסים
let courses = [
    {
        name: "HTML",
        title: " Basic",
        id: 0,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/html2.jpg"
    },
    {
        name: "HTML",
        title: "Basic",
        id: 1,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/html2.jpg"
    },
    {
        name: "HTML",
        title: "Advanced",
        id: 2,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/HTML3.png"
    },
    {
        name: "HTML",
        title: "Advanced",
        id: 3,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/HTML3.png"
    },
    {
        name: "HTML",
        title: "Profesional",
        id: 4,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/HTML3.png"
    },
    {
        name: "HTML",
        title: "Profesional",
        id: 5,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/HTML3.png"
    },

    {
        name: "CSS",
        title: "Basic",
        id: 6,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/css1.jpg"
    },
    {
        name: "CSS",
        title: "Basic",
        id: 7,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/css1.jpg"
    },
    {
        name: "CSS",
        title: "Advanced",
        id: 8,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/css2.png"


    },
    {
        name: "CSS",
        title: "Advanced",
        id: 9,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/css2.png"
    },
    {
        name: "CSS",
        title: "Profesional",
        id: 10,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/css33.jpg"
    },
    {
        name: "CSS",
        title: "Profesional",
        id: 11,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/css33.jpg"
    },

    {
        name: "JS",
        title: "Basic",
        id: 12,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/js1.jpg"
    },
    {
        name: "JS",
        title: "Basic",
        id: 13,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/js1.jpg"
    },
    {
        name: "JS",
        title: "Advanced",
        id: 14,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/js2.jpg"
    },
    {
        name: "JS",
        title: "Advanced",
        id: 15,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/js2.jpg"
    },
    {
        name: "JS",
        title: "Profesional",
        id: 16,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/js2.jpg"
    },
    {
        name: "JS",
        title: "Profesional",
        id: 17,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/js2.jpg"
    },

    {
        name: "SQL",
        title: "Basic",
        id: 18,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/sql1.jpg"
    },
    {
        name: "SQL",
        title: "Basic",
        id: 19,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/sql1.jpg"
    },
    {
        name: "SQL",
        title: "Advanced",
        id: 20,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/sql2.jpg"
    },
    {
        name: "SQL",
        title: "Advanced",
        id: 21,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/sql2.jpg"
    },
    {
        name: "SQL",
        title: "Profesional",
        id: 22,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/sql3.jpg"
    },
    {
        name: "SQL",
        title: "Profesional",
        id: 23,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/sql3.jpg"
    },


    {
        name: "C#",
        title: "Basic",
        id: 24,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/c1.jpg"
    },
    {
        name: "C#",
        title: "Basic",
        id: 25,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/c1.jpg"
    },
    {
        name: "C#",
        title: "Advanced",
        id: 26,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/c3.jpg"
    },
    {
        name: "C#",
        title: "Advanced",
        id: 27,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/c3.jpg"
    },
    {
        name: "C#",
        title: "Profesional",
        id: 28,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/c3.jpg"
    },
    {
        name: "C#",
        title: "Profesional",
        id: 29,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/c3.jpg"
    },

    {
        name: "OOP",
        title: "Basic",
        id: 30,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/oop1.jpg"
    },
    {
        name: "OOP",
        title: "Basic",
        id: 31,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/oop1.jpg"
    },
    {
        name: "OOP",
        title: "Advanced",
        id: 32,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/oop2.jpg"
    },
    {
        name: "OOP",
        title: "Advanced",
        id: 33,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/oop2.jpg"
    },
    {
        name: "OOP",
        title: "Profesional",
        id: 34,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/oop3.png"
    },
    {
        name: "OOP",
        title: "Profesional",
        id: 35,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/oop3.png"
    },


    {
        name: "REACT",
        title: "Basic",
        id: 36,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/react2.png"
    },
    {
        name: "REACT",
        title: "Basic",
        id: 37,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/react2.png"

    },
    {
        name: "REACT",
        title: "Advanced",
        id: 38,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/React3.jpg"
    },
    {
        name: "REACT",
        title: "Advanced",
        id: 39,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/React3.jpg"
    },
    {
        name: "REACT",
        title: "Profesional",
        id: 40,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/React3.jpg"
    },
    {
        name: "REACT",
        title: "Profesional",
        id: 41,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/React3.jpg"
    },


    {
        name: "JAVA",
        title: "Basic",
        id: 42,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/java1.png"
    },
    {
        name: "JAVA",
        title: "Basic",
        id: 43,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/java1.png"
    },
    {
        name: "JAVA",
        title: "Advanced",
        id: 44,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/java2.png"
    },
    {
        name: "JAVA",
        title: "Advanced",
        id: 45,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/java2.png"
    },
    {
        name: "JAVA",
        title: "Profesional",
        id: 46,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/java3.jpg"
    },
    {
        name: "JAVA",
        title: "Profesional",
        id: 47,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/java3.jpg"
    },


    {
        name: "PYTON",
        title: "Basic",
        id: 48,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/pyton1.png"
    },
    {
        name: "PYTON",
        title: "Basic",
        id: 49,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/pyton1.png"
    },
    {
        name: "PYTON",
        title: "Advanced",
        id: 50,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/pyton1.png"
    },
    {
        name: "PYTON",
        title: "Advanced",
        id: 51,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/pyton1.png"
    },
    {
        name: "PYTON",
        title: "Profesional",
        id: 52,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/pyton1.png"
    },
    {
        name: "PYTON",
        title: "Profesional",
        id: 53,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/pyton2.jpg"
    },


    {
        name: "jQUERY",
        title: "Basic",
        id: 54,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/jquery1.jpg"
    },
    {
        name: "jQUERY",
        title: "Basic",
        id: 55,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/jquery1.jpg"
    },
    {
        name: "jQUERY",
        title: "Advanced",
        id: 56,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/jquery2.png"
    },
    {
        name: "jQUERY",
        title: "Advanced",
        id: 57,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/jquery2.png"
    },
    {
        name: "jQUERY",
        title: "Profesional",
        id: 58,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/jquery3.jpg"
    },
    {
        name: "jQUERY",
        title: "Profesional",
        id: 59,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/jquery2.png"
    },


    {
        name: "PHP",
        title: "Basic",
        id: 60,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/php1.jpg"
    },
    {
        name: "PHP",
        title: "Basic",
        id: 61,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/php1.jpg"
    },
    {
        name: "PHP",
        title: "Advanced",
        id: 62,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/php2.jpg"
    },
    {
        name: "PHP",
        title: "Advanced",
        id: 63,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/php2.jpg"
    },
    {
        name: "PHP",
        title: "Profesional",
        id: 64,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/php3.png"
    },
    {
        name: "PHP",
        title: "Profesional",
        id: 65,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/php3.png"
    },



    {
        name: "ANGULAR",
        title: "Basic",
        id: 66,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור בקבוצה",
        level: "רמת מתחילים",
        price: 100,
        image: "../image/ang1.png"
    },
    {
        name: "ANGULAR",
        title: "Basic",
        id: 67,
        desc: "רכישת ידע בסיסי ",
        type: "שיעור פרטני",
        level: "רמת מתחילים",
        price: 200,
        image: "../image/ang1.png"
    },
    {
        name: "ANGULAR",
        title: "Advanced",
        id: 68,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים",
        price: 150,
        image: "../image/ang2.jpg"
    },
    {
        name: "ANGULAR",
        title: "Advanced",
        id: 69,
        desc: "רכישת ידע מתקדם ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים",
        price: 300,
        image: "../image/ang2.jpg"
    },
    {
        name: "ANGULAR",
        title: "Profesional",
        id: 70,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור בקבוצה",
        level: "רמת מתקדמים פלוס",
        price: 200,
        image: "../image/ang3.jpg"
    },
    {
        name: "ANGULAR",
        title: "Profesional",
        id: 71,
        desc: "רכישת ידע לרמת בכיר ",
        type: "שיעור פרטני",
        level: "רמת מתקדמים פלוס",
        price: 400,
        image: "../image/ang3.jpg"
    }


]

let page_data = {};// משתנה כללי

//טפיסת ה BODY ולפיו הפונקציות הללו קורות
switch (document.querySelector("body").getAttribute("id")) {
    case "bodyMain":
        homeMain()
        break;
    case "coursimsMain":
        mainFormation()
        break;
    case "singleCourse":
        singleCourse()
        break;
    case "cart":
        cart()
        break;
    case "inscriptionForm":
        inscription()
        break;
    case "payment":
        payment()
        break;
}

//עמוד הבית
function homeMain(){
    
//when the page loaded this function strat
//it has an array of pictures and with setInterval
// every 3 sec the image change to the next one
window.onload=function formation(){
    let img_array= ["image/ang.png","image/css3.png",
"image/es6.png","image/git.png","image/html5.png",
"image/js.png","image/nodejs.png","image/npm.png",
"image/react.png","image/sass.png","image/vue.png","image/webpack.png"];

    let interval=3000;
    let image= document.getElementById("formimage");
    let index = 0;


    function slide() {
        image.src = img_array[index++%img_array.length];
    }

    setInterval(slide, interval);

}

//before the page unload this function remove 
//from the local storage the user cart
//the pupose for the moment is that the order of the user will not stay in the 
//user cart if he didn't achieve the payment prosses
window.addEventListener("beforeunload", function (e) {
    localStorage.removeItem('userCart');
    localStorage.removeItem('cartTotal')
  
  });
}



//עמוד הראשי של כל הקורסים
function mainFormation() {
    popUpInscription();
    numOfDaysToShow();
    create(courses);
    document.querySelector("#filterCourse").addEventListener('submit', filter);
    getCourseByLink();
    sumToShow();
}

//עמוד מוצר בודד
function singleCourse() {
    document.addEventListener('DOMContentLoaded', SingleOnload);
    loadSingleCourse();
}

//עמוד עגלה

function cart() {
    document.addEventListener('DOMContentLoaded', SingleOnload);
    showCartTable();
    document.querySelector("#btnEmpty").addEventListener('click', emptyCart);
    removeOneItem();
    document.querySelector('#printList').addEventListener('click',printForm)
    
}

//עמוד הרשמה 
function inscription() {
    document.addEventListener('DOMContentLoaded', SingleOnload);
    validationForm();
    currentTime();
    numOfDays();
    document.querySelector("#eyeShow").addEventListener('click', showPass)
    document.querySelector("#printForm").addEventListener('click', printForm)
}

//עמוד תשלום
function payment() {
    document.addEventListener('DOMContentLoaded', SingleOnload);
    popUpPayment();
    validateRegistered();
    paymentContain();
    
}

//כמעט כל ההערות כתובות באנגלית- מקווה שזה בסדר פשוט הסתבכתי עם העברית והנגלית יחד פשוט בלבול ולא מובן כל כך
//תודה על כל השיעורים הנפלאים!ק

//the popup inscription that say to regist in order to have a reduction
function popUpInscription() {

  document.querySelector('body').classList.add('popup_open')


  let closers = document.querySelectorAll('.close');

  for (btn of closers) {
      btn.addEventListener('click', closepop);
  }

  document.querySelector('body').addEventListener('keyup', function (e) {
      if (e.keyCode == 27)
          closepop();
  })

  let stop = document.querySelectorAll('.stop');

  for (each of stop) {
      each.addEventListener('click', function (e) {
          e.stopPropagation();
      })
  }

  function closepop(e) {
      document.querySelector('body').classList.remove('popup_open');
  }

}

//this function show in the popup how many days are left 
//to the last day of inscription in order to get a reduction
function numOfDaysToShow() {
  let date1 = new Date();
  let date2 = new Date("06/30/2023");


  let Difference_In_Time = date2.getTime() - date1.getTime();
  // To calculate the no. of days between two dates
  let differenceInDays = Difference_In_Time / (1000 * 3600 * 24);
  let finalResult = differenceInDays.toFixed(0);
  //To display the final no. of days (result)

  let popDayLeft = document.querySelector('.hurry');
  popDayLeft.innerHTML += finalResult;
 
}

//the total sum shown in the coursim page next to the cart
function sumToShow(){
    let sum=getTotalToShow();

    let div=document.querySelector("#sumToPay");

    div.innerHTML+=sum +" שח";

}

//function that create a div for each object of the array courses
//in this function we first sort the array
//this function is also used to create the array 
//when it is filtered(filter function) by the select 
function create(arr) {
    //פונקציה שממינת לפי  שם בתצוגה במערך לפני שבוחרים      
    arr.sort(function (a, b) {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    arr.map(function (item) {
        let formation = `<div class="course" id="${item.name}" data-name="${item.name}" data-level="${item.level}" data-type="${item.type}">
<h3 class="cname">${item.name}</h3>
<h3 class="ctitle">${item.title}</h3>
<p class="cdes">${item.desc}</p>
<p class="clevel">${item.level}</p>
<p class="ctype">${item.type}</p>
<a href=singlecourse.html?id=${item.id} id="forDetail"> לפרטים</a>
</div>`

        document.querySelector("#productsContainer").innerHTML += formation;
    })
}

//function that get tothe course needed by clicking using scrol
function getCourseByLink(){
   
let courseLinks = document.querySelectorAll(".oneOpCourse");

courseLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    let courseName = link.parentElement.getAttribute("name");
    let course = document.querySelector(`[data-name="${courseName}"]`);
    let courseId = course.getAttribute("id");
 // Scroll to the course element
 let courseSection = document.getElementById(courseId);
 courseSection.scrollIntoView();
  });
}); 
}


//function that is using the create function 
//after having created a filtered array with the filter 
function filter(e) {
    e.preventDefault();

    //כאן תפסנו את הערכים של הסלקטים
    let chtype = document.querySelector("#type");
    let chosenType = chtype.options[chtype.selectedIndex].text;

    let chlevel = document.querySelector("#level");
    let chosenLevel = chlevel.options[chlevel.selectedIndex].text;

    let chname = document.querySelector("#name");
    let chosenName = chname.options[chname.selectedIndex].text;


    //מרוקנים את הדיב שבתוכו יש את המערך
    document.querySelector("#productsContainer").innerHTML = " ";

    //יוצרים מערך מסונן עם פונקציה פילטר שמחזירה רקTRUE AND FALSE 
    //ורק מה שTRUE נכנס למערך
    let filtered_arr = courses.filter((item) => {
        if (chosenType && chosenType == item.type) {
            if (chosenLevel && chosenLevel == item.level) {
                if (chosenName && chosenName == item.name)

                    return true;
            }
        }

        return false;
    });

    //כאן שולחים לפונקציה פילטר שיוצרת את הדיבים בתוך ה HTML

    create(filtered_arr);



}


//function that create the single course page according to the course chosen
//we are using here URL search params
//we can add the course to the cart and by clicking on the button 
//the course is added and the function updateCart is appening
function loadSingleCourse(){

//שולפת את המוצר שצריך ליצר לפי הפרמטר בקישור
const paramsString = location.search;//שליפת הנתונים מהקישור אחרי הסימן שאלה 
const searchParams = new URLSearchParams(paramsString);//עכשיו אני משתמשת ב...שמאפשר לי עבודה נוחה עם הפרמטרים האלו
const item = courses[searchParams.get("id")];
page_data.id = searchParams.get("id");
let tittle=document.querySelector("#sumtoTittle");
let sum=getTotalToShow();


let formation = `<div class=single>
<div class="image"><img id="img" src=${item.image}></div>
<h3 class="cname">${item.name}</h3>
<h3 class="ctitle">${item.title}</h3>
<p class="cdes">${item.desc}.</p>
<p class="clevel">${item.level}.</p>
<p class="ctype">${item.type}.</p>
<p id=price>${item.price}</p>

<label for="number">בחר את כמות השיעורים הרצויה</label>
<input type="number" id="quantity"/>
<br/>

<div id="svgLinks">

<div>
<button id="cartButton"><img src="../image/cartAdd.svg"></button>
<p>להוספה לסל לימוד</p>
</div>
<div>
<button><a href="../pages/cart.html"><img src="../image/cartR.svg" id="iconcart"></a></button>
<p>לרשימת הקורסים שלי</p>
</div>
<div>
<button><a href="coursims.html"><img src="../image/course.svg" id=""></a></button>
<p>לבחירת קורס נוסף</p>
</div>
<div>
<button><a href="../pages/payment.html"><img src="../image/pay.svg" id=""></a></button>
<p>לתשלום</p>
</div>
<div>
<button><a href="../index.html"><img src="../image/returnHome.svg" id=""></a></button>
<p>לחזרה לעמוד הבית</p>
</div>
<div>
<button id="printSingle"><img src="../image/print.svg"></button>
<p>להדפסת פירטי קורס זה</p>
</div>

</div>

</div>`

document.querySelector("#mainContainerSingleCourse").innerHTML = formation;

document.querySelector("#cartButton").addEventListener('click', updateCart);

document.querySelector("#printSingle").addEventListener('click', printPage);

tittle.innerHTML+=sum + " שח"


}
    

//function that print a page by clicking on the printer
function printPage() {
    window.print();
}

//function that add to the cart in the local storage, the course added
function updateCart() {


    let arr = [];//איפוס מערך ריק
    let myjson = localStorage.getItem('userCart');//מכניסים לתןך מי גיסון את הנתון מלוקל סטורג
    if (myjson)//אם יש אז תמיר למערך אם לא תשאר כמו שאפסתי אותך
    {
        arr = JSON.parse(myjson)

    }

    let newobj =//יצירת אוביקט חדש
    {
        id: page_data.id,
        title: document.querySelector(".ctitle").innerHTML,
        name: document.querySelector(".cname").innerHTML,
        quantity: document.querySelector("#quantity").value,
        price: document.querySelector("#price").innerHTML

    };

    arr.push(newobj);//דוחפים את האוביקט לתוך המערך הקודם

    myjson = JSON.stringify(arr);// לסטרינג ממירים את המערך לגיסון
    localStorage.setItem('userCart', myjson);// מכניסים את מה שיש במשתנה הקודם לתוך ה לוקל סטורג 

    Swal.fire("בהצלחה רבה!", "הקורס נקלט בהצלחה", "success");

}

//function that update the total sum to pay(if reduction or not)
// and save it in the localstorage
function updateCartTotal() {
    let grandTotal = 0;
    let rows = document.querySelectorAll('#cartTableBody tr');
    for (row of rows) {
      let subTotalCell = row.querySelector('.text-right:nth-child(4)');
      grandTotal += parseFloat(subTotalCell.innerHTML);
    }
    let totalCell = document.querySelector('#totalAmount');
    let total = grandTotal.toFixed(2);
    totalCell.innerHTML = total + " שח";
    let saved = localStorage.getItem('userCart');
    if (saved) {
      let shoppingCart = JSON.parse(saved);
      let maxDate = new Date("06/30/2023");
      let currentDate = new Date();
      let discount = (currentDate < maxDate) ? 0.1 : 0;
      let totalPrice = total * (1 - discount);
      let totalObj = {
        total:total,
        totalPriceReduce: totalPrice.toFixed(2),
        discount: discount.toFixed(2),

      };
      localStorage.setItem('cartTotal', JSON.stringify(totalObj));
    }
  }

//function that create the cartPage
//this function is calling the updateCartTotal function and
//and for each input type nuber(the quantity) 
//their is an event listener change wich is calling the updateCartAfterChange 
//each time their is any changement in the value of the input
//their is also an event listener click on the char button 
//witch remove the course related to this button 
function showCartTable() {

    let cartRowHTML = "";
    let itemCount = 0;

    let price = 0;
    let quantity = 0;
    let subTotal = 0;

    let cartRow = document.querySelector('#cartTableBody');
    let countItem = document.querySelector('#itemCount');


    let saved = localStorage.getItem('userCart');

    if (saved) {
        let shoppingCart = JSON.parse(saved);

        //Iterate javascript shopping cart array
        shoppingCart.forEach(function (item) {
            //let cartItem = JSON.parse(item);
            price = parseFloat(item.price);
            quantity = parseInt(item.quantity);
            subTotal = price * quantity;
            itemCount += quantity;

            cartRowHTML += `<tr>
                    <td> ${item.name}  ${item.title}</td>
                    <td class="text-right" > ${price.toFixed(2)} ש'ח</td>
                    <td class="text-right"><input type="number" value=${quantity} min="1" data-price=${price} data-id=${item.id}>  </input></td>
                    <td class="text-right"> ${subTotal.toFixed(2)}  ש'ח </td>
                    <td class="text-right"><button class='remove' data-id=${item.id}><img  src='../image/cartcancel.svg' ></button></td>
                    </tr>`;

           // grandTotal += subTotal;

        });

        cartRow.innerHTML = cartRowHTML;
        countItem.innerHTML = itemCount;
        updateCartTotal();
        //total.innerHTML = grandTotal.toFixed(2) + "ש'ח";

        // Add event listener to each "quantity" input
        let quantityInputs = document.querySelectorAll('#cartTableBody input[type="number"]');
        for (input of quantityInputs) {
            input.addEventListener('change', updateCartAfterChange);
        }

    }

    else {
        shoppingCart = [];
    }

    // Add event listener to each "remove" button
    let removeCartItemButtons = document.querySelectorAll('.remove');
    for (btn of removeCartItemButtons) {
        btn.addEventListener('click', removing);
    }

 
}

//פונקציה זו מאדקנת את הכמות ואת המחיר 
//האישי של כל קורס והגלובלי בעת שינוי כמות השיעורים ב INPUT
function updateCartAfterChange(event) {
    let input = event.target;
    let price = parseFloat(input.dataset.price);
    let quantity = parseInt(input.value);
    let subTotal = price * quantity;
    let row = input.parentNode.parentNode;
    let subTotalCell = row.querySelector('.text-right:nth-child(4)');
   updateCartTotal();

    subTotalCell.innerHTML = subTotal.toFixed(2);
    let itemId = input.dataset.id;

    let saved = localStorage.getItem('userCart');
    if (saved) {
        let shoppingCart = JSON.parse(saved);
        let itemIndex = shoppingCart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            shoppingCart[itemIndex].quantity = quantity;
            localStorage.setItem('userCart', JSON.stringify(shoppingCart));
        }
    }
}


//this function is responsable of removing the item of the cart
//witch the  cart button was clicked
//and after it's updating the cart and showing again the cart(the pupose is also to reput
//event listener on all the others cart buttons)
function removing() {
    let saved = localStorage.getItem('userCart');
    let shoppingCart = JSON.parse(saved);
    let data = this.getAttribute('data-id');

    for (item of shoppingCart) {

        if (item.id == data) {
            let itemIndex = shoppingCart.findIndex(item => item.id === data)
            shoppingCart.splice(itemIndex, 1);
            shoppingCart = JSON.stringify(shoppingCart)
            localStorage.setItem('userCart', shoppingCart)
            break;
        }
    }
    showCartTable();
}


function removeOneItem() {
    showCartTable();
}


//function that appen by clicking on "cancel all"
//it cancel everything in the cart without 
//giving the possibility of going backwards
function emptyCart() {

    let saved = localStorage.getItem('userCart');
    //remove cart session storage object & refresh cart totals
    if (saved) {
        Swal.fire({
            title: 'האם אתה בטוח בביטול הזמנתך?',
            text: "קורסים אלו הם ההזדמנות שלך להצליח!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'ביטול',
            confirmButtonText: 'אישור'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'בוטל!',
                    'הקורסים שלך בוטלו',
                    'success'
                )
                localStorage.removeItem('userCart');
                showCartTable();

                let cartRow = document.querySelector('#cartTableBody');
                let countItem = document.getElementById('itemCount');
                let total = document.querySelector('#totalAmount');
                cartRow.innerHTML = " ";
                countItem.innerHTML = 0 + "ש'ח";
                total.innerHTML = 0 + "ש'ח";
                localStorage.removeItem('cartTotal');
            }
        })

    }
}

//פונקציות לעמוד הרשמה

//function that shows the surrent time to press the user to regist him self
//it appered at the inscription document
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";


    if (hh >= 12) {
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    var t = setTimeout(function () { currentTime() }, 1000);

}

//function that appered at the inscription document
// it shows the current date and the final date(in heberew) to regist in order to have a reduction
//it also calculate the num of days left to regist in order to get the reduction
function numOfDays() {
    let date1 = new Date();
    let date2 = new Date("06/30/2023");

    let days = new Array();
    days[days.length] = "יום ראשון";
    days[days.length] = "יום שני";
    days[days.length] = "יום שלישי";
    days[days.length] = "יום רביעי";
    days[days.length] = "יום חמישי";
    days[days.length] = "יום שישי";

    let months = new Array();
    months[months.length] = "ינואר";
    months[months.length] = "פברואר";
    months[months.length] = "מרץ";
    months[months.length] = "אפריל";
    months[months.length] = "מאי";
    months[months.length] = "יוני";
    months[months.length] = "יולי";
    months[months.length] = "אוגוסט";
    months[months.length] = "ספטמבר";
    months[months.length] = "אוקטובר";
    months[months.length] = "נובמבר";
    months[months.length] = "דצמבר";



    let Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    let differenceInDays = Difference_In_Time / (1000 * 3600 * 24);
    let finalResult = differenceInDays.toFixed(0);
    //To display the final no. of days (result)

    date1Hebreu = days[date1.getDay()] + "," + " " + date1.getDate() + " " + "ל" + months[date1.getMonth()] + " " + "שנת" + " " + date1.getFullYear();
    date2Hebreu = days[date2.getDay()] + "," + " " + date2.getDate() + " " + "ל" + months[date2.getMonth()] + " " + "שנת" + " " + date2.getFullYear();

    let d1 = `<div><p>היום:${date1Hebreu}</p></div>`;
    let d2 = `<p>מועד ההרשמה עד ל${date2Hebreu}</p> <br>`
    let tfi = `<p>נשארו לך</p>`
    let final = `<p> ${parseInt(finalResult)}</p></div>`;
    let tfiend = `<p>ימים</p>`

    let da1 = document.querySelector("#date1");
    let da2 = document.querySelector("#date2");
    let fi = document.querySelector("#final");
    let texts = document.querySelector("#tfi");
    let textend = document.querySelector("#tfiend");
    da1.innerHTML += d1;
    da2.innerHTML += d2;
    texts.innerHTML = tfi;
    fi.innerHTML += final;
    textend.innerHTML = tfiend;


}

//function that using the handleSubmit function on submit the form
function validationForm() {

    let myForm = document.getElementById('inscform');

    myForm.addEventListener('submit', handleSubmit);

}

//function that is appenning on submiting the registration form 
//it is checking all the fieled and sending appropriate messages
function handleSubmit(event) {
    event.preventDefault();
    let myForm = document.getElementById('inscform');

    let formData = new FormData(myForm);

    let users=localStorage.getItem('userRegister');

    let name = formData.get('name');
    let fname = formData.get('fname');
    let phone = formData.get('phone');
    let id = formData.get('identity');
    let emailf = formData.get('emailf');
    let emailsec = formData.get('emailsec');
    let pass1 = formData.get('pw1');
    let pass2 = formData.get('pw2');


    let ename = document.querySelector("#ename");
    let efname = document.querySelector("#efname");
    let ephone = document.querySelector("#ephone");
    let eidentity = document.querySelector("#eidentity");
    let elevel = document.querySelector("#elevel");
    let elang = document.querySelector("#elang");
    let egenre = document.querySelector("#egenre");
    let efemail = document.querySelector("#efemail");
    let esecemail = document.querySelector("#esecemail");
    let epass1 = document.querySelector("#epass1");
    let epass2 = document.querySelector("#epass2");

    let haserror = false;

    if (!name) {
        ename.innerHTML = "שדה זה הינו שדה חובה!"
        haserror = true;
    } else if (!isValidNames(name)) {
        ename.innerHTML = 'הכנס שם תקין בעברית';
        haserror = true;
    } else {
        ename.innerHTML = '';
    }



    if (!fname) {
        efname.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else if (!isValidNames(fname)) {
        efname.innerHTML = 'הכנס שם משפחה תקין בעברית';
        haserror = true;
    } else {
        efname.innerHTML = '';
    }

    if (!phone) {
        ephone.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else if (!isValidPhone(phone)) {
        ephone.innerHTML = 'הכנס מספר טלפון תקין';
        haserror = true;
    } else {
        ephone.innerHTML = '';
    }

    //בודק גם אם המשתמש כבר קיים במערכת
    if (!id) {
        eidentity.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else if (!isValidId(id)) {
        eidentity.innerHTML = 'הכנס מספר תעודת זהות תקין';
        haserror = true;
    } else if(users){
        let userExist=JSON.parse(users);
        let isSameID=userExist.filter((item)=>item.id==id)
        if(isSameID>0)
        {
            eidentity.innerHTML ='הנך רשום במערכת - במידה ובצעת הזמנה גש לתשלום';
            haserror = true;
        }
    }
    else{
        eidentity.innerHTML = '';
    }

    if (!emailf) {
        efemail.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else if (!isValidEmail(emailf)) {
        efemail.innerHTML = 'הכנס כתובת אימייל תקינה';
        haserror = true;
    } else {
        efemail.innerHTML = '';
    }

    if (!emailsec) {
        esecemail.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else if (!isValidEmail(emailsec)) {
        esecemail.innerHTML = 'הכנס כתובת אימייל תקינה';
        haserror = true;
    } else if (emailf !== emailsec) {
        esecemail.innerHTML = 'האימיילים אינם תואמים';
        haserror = true;
    } else {
        esecemail.innerHTML = '';
    }

    //checking if the password is valid 
    //and also checking if someone alredy used this password
    if (!pass1) {
        epass1.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else if (!isValidPassword(pass1)) {
        epass1.innerHTML = ' שדה סיסמה אמור להכיל 8 תווים הכוללים אותיות  קטנות, אות גדולה אחת,מספר אחד, וסימון אחד. ';
        haserror = true;
    } else if(users){
        let userExist=JSON.parse(users);
        let isSamePass=userExist.filter((item)=>item.password==pass1)
        if(isSamePass>0)
        {
            epass1.innerHTML = 'סיסמה זו כבר קיימת במערכת בחר סיסמה אחרת';
            haserror = true;
        }
    }
    else{
        epass1.innerHTML = '';
    }

    if (!pass2) {
        epass2.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else if (pass1 !== pass2) {
        epass2.innerHTML = 'אימות הסיסמה שגוי!';
        haserror = true;
    } else {
        epass2.innerHTML = '';
    }


    if (!checkLanguage()) {
        elang.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else {
        elang.innerHTML = '';
    }

    if (!checkLevel()) {
        elevel.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else {
        elevel.innerHTML = '';
    }

    if (!checkGender()) {
        egenre.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else {
        egenre.innerHTML = '';
    }


    //הודאות לאחר לחיצה על סבמיט לפי אם הכל תקין אם לא תקין 
    // ואם תקין אם עבר את התאריך או לא עבר את תאריך הרישום וכן זכאי להנחה

    let registrationDate = new Date("06/30/2023");


    // Check if the user has registered before the registration date
    let isRegisteredBeforeDate = new Date() < registrationDate;



    //  appropriate message based on the validation result and registration date

    if (haserror) {
        Swal.fire({
            icon: 'error',
            title: 'משהו השתבש...',
            text: 'בדוק את כל שדות טופס ההרשמה!',

        })
        return;
    }
    else {
        if (!haserror && isRegisteredBeforeDate) {
            updateRegistered();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'ההרשמה בוצעה בהצלחה!נרשמת בזמן! הנך זכאי ל10% הנחה',
                showConfirmButton: false,
                timer: 2500

            })

        }
        else {
            if (!haserror && !isRegisteredBeforeDate) {
                updateRegistered();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '!ההרשמה בוצעה בהצלחה',
                    showConfirmButton: false,
                    timer: 2500

                })
            }
        }
    }

}

//all the validation functions for the form:

//checking if the names are valid using REGEX
function isValidNames(n) {

    let nameRegex = /^[ \u0590-\u05FF ]+$/;

    return nameRegex.test(n);
}

//checking if the email is valid using REGEX
function isValidEmail(email) {

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

//checking if the phone is valid using REGEX
function isValidPhone(phone) {
    let phoneRegex = /^\d{9,15}$/;

    return phoneRegex.test(phone);
}

//checking if the id is valid using REGEX
function isValidId(id) {
    let idRegex = /^\d{9}$/;

    return idRegex.test(id);
}

//checking if the password is valid using REGEX
function isValidPassword(pw) {
    let pwRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return pwRegex.test(pw);
}

//checking if a gender was selected
function checkGender() {
    let genderRadios = document.querySelectorAll('input[name="gender"]');
    let selectedGender = false;

    for (var i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            selectedGender = true;
            break;
        }
    }

    if (selectedGender)
        return true;
    else
        return false;
}

//checking if a level was selected
function checkLevel() {
    let levelRadios = document.querySelectorAll('input[name="level"]');
    let selectedLevel = false;

    for (var i = 0; i < levelRadios.length; i++) {
        if (levelRadios[i].checked) {
            selectedLevel = true;
            break;
        }
    }

    if (selectedLevel)
        return true;
    else
        return false;
}

//checking if a language was selected
function checkLanguage() {
    let langRadios = document.querySelectorAll('input[name="language"]');
    let selectedLang = false;

    for (var i = 0; i < langRadios.length; i++) {
        if (langRadios[i].checked) {
            selectedLang = true;
            break;
        }
    }

    if (selectedLang)
        return true;
    else
        return false;
}

//the eye of the password changing
function showPass() {
        let passwordInput = document.getElementById("pw1");
        let eyeImage = document.querySelector("img[alt='Show password']");
      
        if (passwordInput.type == "password") {
          passwordInput.type = "text";
          eyeImage.src = "../image/eyex.svg";
          eyeImage.alt = "Hide password";
        } else {
          passwordInput.type = "password";
          eyeImage.src = "../image/eyeCheck.svg";
          eyeImage.alt = "Show password";
        }
}

//printing the register form
function printForm() {
    window.print();
}

//function that register the user's detail 
//from the register form in the local storage
function updateRegistered() {

    let date = new Date();
    let arr = [];//איפוס מערך ריק
    let myRegistered = localStorage.getItem('userRegister');//מכניסים לתןך מי גיסון את הנתון מלוקל סטורג
    if (myRegistered)//אם יש אז תמיר למערך אם לא תשאר כמו שאפסתי אותך
    {
        arr = JSON.parse(myRegistered)

    }

    let newobj =//יצירת אוביקט חדש
    {
        id: document.querySelector("#identity").value,
        firstName: document.querySelector("#name").value,
        familyName: document.querySelector("#fname").value,
        phone: document.querySelector("#phone").value,
        email: document.querySelector("#email11").value,
        password: document.querySelector("#pw1").value,
        registerDate: date


    };

    arr.push(newobj);//דוחפים את האוביקט לתוך המערך הקודם

    myRegistered = JSON.stringify(arr);// לסטרינג ממירים את המערך לגיסון
    localStorage.setItem('userRegister', myRegistered);// מכניסים את מה שיש במשתנה הקודם לתוך ה לוקל סטורג 


}


//בעיקר לעמוד התשלום


//when the window open in the payment.html this popup appered
//using also event of stopPropagation
function popUpPayment() {

    document.querySelector('body').classList.add('popup_open')

    let stop = document.querySelectorAll('.stop');

    for (each of stop) {
        each.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    }

}


//this function is checking if the user got registered once
//just if he got registered the popup will close on submit 
//and will show to the user like an alert with the message if he deserve 
//a reduction and the total sum he has to pay
//the functions:getTotalToShow and getTextToShow are used here for this purpose
//and then the timerfun function start
function cheking(event) {
    event.preventDefault();
    let userFound = false;
    let username = document.querySelector("#username").value;
    let passw = document.querySelector('#pw').value;
    let erpass = document.querySelector("#epw");
    let eruse = document.querySelector("#use");
    let enone = document.querySelector("#none");
    erpass.innerHTML = '';
    eruse.innerHTML = '';
    enone.innerHTML = '';
    
    let regist = [];

    let myRegistered = localStorage.getItem('userRegister');
    if (myRegistered) {
        regist = JSON.parse(myRegistered);
    }
    let iAmRegistered=regist.filter((item)=>item.firstName==username)

    let iHaveAPass=iAmRegistered.filter((item)=>item.password==passw);
    let iHaveAnId;
    //let iHaveAnId=iAmRegistered.filter((item)=>item.id==passw);

        if(!username &&!passw)
        { 
            enone.innerHTML='שדות אלו הינם שדות חובה!';
            return;
        }

        if (!username) {
            eruse.innerHTML = 'שדה זה הינו שדה חובה!';
            userFound = false;
            return;
        }
        if (!passw) {
            erpass.innerHTML = 'שדה זה הינו שדה חובה!';
            userFound = false;
            return;
        }
        
    
        if(iAmRegistered.length>0)
        {
            userFound = true;
            if (iHaveAPass.length>0) {
                userFound = true;
    
            } 
            else 
            {
                if(iHaveAPass.length==0)
                {
                    erpass.innerHTML='במידה ושכחת את סיסמתך הקש תעודת זהות במקום סיסמה'; 
                    userFound=false;

                    
                }
                
                iHaveAnId=iAmRegistered.filter((item)=>item.id==passw);
                if(iHaveAnId.length>0)
                       {
                    userFound=true;
                 
                       }

                    else 
                       {
                           if(iHaveAnId.length==0)
                              {
                                if(erpass)
                                {
                                    enone.innerHTML='';
                                }
                                else{
                                  enone.innerHTML='מספר תעודת הזהות שגוי,אינך רשום במערכת';
                                  userFound = false;
                                  return;   
                                }
                        
               
                              }
                       }

           }
        }
        else{

            enone.innerHTML='יש תקלה- אינך מזוהה במערכת בדוק את שם המשתמש שלך או גש לרישום';
            userFound = false;
            return false; // prevent form submission

        }

      
    
    if (userFound) {
    document.querySelector('body').classList.remove('popup_open');

    let real=getTotalToShow();
    let text=getTextToShow()

    Swal.fire("הנך מועבר לתשלום", text +"  "+ " המחיר לתשלום הינו " + real, "success");

    }
timerfun();
}

//function that return a int value the real total to pay
function getTotalToShow(){
    let maxDate = new Date("06/30/2023");
    let currentDate = new Date();
    let total=localStorage.getItem('cartTotal');
    let real=0;
    if(total)
    {
        let totalFinal=JSON.parse(total);
        
        if(currentDate<maxDate)
        {
            real=totalFinal.totalPriceReduce;
           
        }
        else
        {
            real=totalFinal.total;
            
        }
    }

    return real;

}

//function that used a string value the text 
//to show if he has a reduction or not
function getTextToShow(){
    let maxDate = new Date("06/30/2023");
    let currentDate = new Date();
    let total=getTotalToShow();
    let text;
    
    if(total!=0)
    {
        if(currentDate<maxDate)
        {
            text="הנך זכאי ל10% הנחה";
           
        }
        else
        {
           text="פספסתה את מועד קבלת ההנחה";
            
        }
    }
    else
    {
        text="לא בוצעה הזמנה כלל!"
    }
        

    return text;
}

//this is the function that used the checking function on submit 
//(at the popup in the HTML payment)
function validateRegistered() {
    document.querySelector("#step1GoPay").addEventListener('submit', cheking);
}

//this function used setTimeout and clearTimeout and mousemove :
//if the user don't move his mouse for 10 second an alert appered 
//and he can or stop the timer or if he doesn't stop if he is transfered to 
//the home page with location.href...
function timerfun() {
    let timer;
    let lastMouseMoveTime = Date.now();
    let stopped = false;
  
    // Reset the timer if the user moves the mouse
    function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        // Calculate the time elapsed since the last mouse move
        let elapsedTime = Date.now() - lastMouseMoveTime;
  
        // Display the message if there was no mouse movement for 10 seconds
        if (elapsedTime >= 10000 && !stopped) {
          let confirmed = confirm("תעובר לעמוד הבית במידה ולא תמשיך בתשלום-האם ברצונך להמשיך בתשלום ?");
          if (!confirmed) {
            //  redirect to home page
            location.href = '../index.html';
            return;
          }
          //Stop the timer
          else {
            stopped = true;
            clearTimeout(timer); 
            alert("המשך בתהליך התשלום.");
            
          }
        }
        else {
          // Reset the timer and continue
          resetTimer();
        }
      }, 1000);
    }
  
    // Start the timer
    resetTimer();
  
    // Listen for mousemove events and update the last mouse move time
    document.addEventListener("mousemove", function () {
      lastMouseMoveTime = Date.now();
    });
  }

//this function deffine the first content of the payment.html
// on submit the function paymantContain will append
function paymentContain() {
    let title = document.querySelector(".txt-heading");
    let contP = document.querySelector(".containerPayment")

    let t = `<h1>בחירת אופן התשלום</h1>`
    let content = `<div class="container">
    <form id="typeOfPayment">
    <fieldset>
    <legend>בחר את אופן התשלום:*</legend>
    <div class="radioPayment" id="mode">
      <label for="aavara">העברה בנקאית</label>
      <input type="radio" id="aavara" name="payMode" value="aavara" required/>
      

      <label for="achrai">כרטיס אשראי</label>
      <input type="radio" id="achrai" name="payMode" value="achrai" required/>
     
    </div>
    
</fieldset>
<span class="errors" class="ePay"></span>
<button type="submit">למעבר לשלב הבא</button>
</form>
</div>`

    title.innerHTML = t;
    contP.innerHTML = content;

    document.querySelector("#typeOfPayment").addEventListener('submit', checkPayment)

}


//function that is checking the type of payment and changing 
//the HTML's content according to the type of payment chosen
//if it is aavara: the uploadBankTransferConfirmation function will append on submit
//else if achrai: the submitAchrai function will append on submit
function checkPayment(e) {
    e.preventDefault();


    let title = document.querySelector(".txt-heading");
    let contP = document.querySelector(".containerPayment")
    ePay = document.querySelector(".ePay")
    ePay = '';
    let haserror = false;
    let typePay;
    let tachrai = `<h1>פרטי האשראי:</h1>`
    let contentach = `<div class="container">
<form id="typeAchrai" id="formachrai">
<div class="big"><img src="../image/achraifront.jpg" alt="Credit card" id="cardImage"></div>
<div class="big">
<div class="little">
  <label for="cardNumber">מספר כרטיס:</label>
  <input type="text" id="cardNumber" maxlength="16">
  <span class="errors" id="cardnum"></span> 
</div>
<div class="little">
  <label for="cardExpirationMonth">תוקף עד:</label>
  <select id="cardExpirationMonth">
    <option disabled selected>חודש</option>
    <option value="01">01</option>
    <option value="02">02</option>
    <option value="03">03</option>
    <option value="04">04</option>
    <option value="05">05</option>
    <option value="06">06</option>
    <option value="07">07</option>
    <option value="08">08</option>
    <option value="09">09</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
  <select id="cardExpirationYear">
    <option disabled selected>שנה</option>
    <option value="2024">2024</option>
    <option value="2025">2025</option>
    <option value="2026">2026</option>
    <option value="2027">2027</option>
    <option value="2028">2028</option>
    <option value="2029">2029</option>
    <option value="2030">2030</option>
    <option value="2031">2031</option>
    <option value="2032">2032</option>
    <option value="2033">2033</option>
  </select>
  <span class="errors" id="exp"></span>
</div>

<div class="little">
  <label for="cardCVC">CVC:</label>
  <input type="text" id="cardCVC" maxlength="3">
  <span class="errors" id="cvc"></span>
</div>
<div class="little">
<button type="submit" id="submitAchrai">שלח</button>
</div>
</div>
</form>
</div>`

    let taavara = `<h1>ביצוע העברה ל:</h1>`
    let contentAavara = `<div class="container">
   <form id="typeAavara">
   <h2>אסתר קורסים ופרויקטים</h2>
   <p>בנק הפועלים<p>
   <p>מס' חשבון:204521</p>
   <p>סניף: 652</p>
   <label>צירוף אישור העברה בנקאית:
   <input type="file" name="bankTransferConfirmation" id="bankTransferConfirmation">
   </label>
   <button type="button" id="bankTransferCon">Upload</button>
   </form>
   </div>`


    if (!checkPayType()) {
        ePay.innerHTML = 'שדה זה הינו שדה חובה!';
        haserror = true;
    } else {
        ePay.innerHTML = '';
    }

    if (haserror) {
        return;
    }
    else {
        let paymentRadios = document.querySelectorAll('input[name="payMode"]');

        for (let i = 0; i < paymentRadios.length; i++) {
            if (paymentRadios[i].checked) {
                typePay = paymentRadios[i].value;
                break;
            }
        }

    }


    if (typePay == "aavara") {
        title.innerHTML = taavara;
        contP.innerHTML = contentAavara;
        document.querySelector("#bankTransferCon").addEventListener('click', uploadBankTransferConfirmation)
    }
    else {
        if (typePay == "achrai") {
            title.innerHTML = tachrai;
            contP.innerHTML = contentach;
            document.querySelector("#typeAchrai").addEventListener('submit', submitAchrai);

        }
    }


}

//function that check if the type of document uploaded is correct
//their is a validation according to type and MB
//this append on submit the folder
function uploadBankTransferConfirmation() {
   
    let fileInput = document.getElementById("bankTransferConfirmation");

   
    if (fileInput.files.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'שדה חובה!',
            text: 'נא בחר קובץ',

        });
        return;
    }

    // Get the selected file
    let file = fileInput.files[0];

    // Check if the file type is allowed (e.g. PDF, JPG, PNG)
    let allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
        Swal.fire({
            icon: 'error',
            title: 'שדה לא תקין!',
            text: 'נא בחר קובץ:PDF,JPG או PNG',
        });
        return;
    }

    // Check if the file size is within the allowed limit (e.g. 5MB)
    let maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
        Swal.fire({
            icon: 'error',
            title: 'הקובץ מעל הגודל המותר!',
            text: 'נא בחר קובץ עד 5MB לכל היותר',
        });
        return;
    }

    // Upload the file using AJAX or a form submission
    let timerInterval
 
    console.log("Uploading file...");

    Swal.fire({
        title: ' התשלום בוצע בהצלחה! תודה שבחרתם בנו ניצור איתכם קשר בעוד  שני ימי עסקים ',
        html: 'הטעינה תסתיים בעוד <b></b> מילישניות.',
        imageUrl: '../image/homepicture.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100) 
        localStorage.removeItem('userCart')
        localStorage.removeItem('cartTotal')
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
       
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
      
      })
   
}

//function that append on submit the credit card detail and that 
//check if the credit card's detail are valid and send alert 
//if not and finnally if every thing is ok there is a swalfire alert 
//and Icleared up the local storage of userCart and cartTotal 
function submitAchrai(e){
    e.preventDefault();
let cardNumberInput = document.getElementById('cardNumber');
let cardExpirationMonthSelect = document.getElementById('cardExpirationMonth');
let cardExpirationYearSelect = document.getElementById('cardExpirationYear');
let cardCVCInput = document.getElementById('cardCVC');
let valid=true;

  if (!validateCardNumber(cardNumberInput.value)) {
    alert('נא הקש מספר אשראי תקין');
    valid=false;
    return;
  }
  if (!validateExpirationDate(cardExpirationMonthSelect.value, cardExpirationYearSelect.value)) {
    alert('נא הקש תוקף תקין');
    valid=false;
    return;
  }
  if (!validateCVC(cardCVCInput.value)) {
    alert('נא הקש קודCVC תקין');
    valid=false;
    return;
  }

if(valid)
{
    Swal.fire({
        title: ' התשלום בוצע בהצלחה! ',
        text: 'תודה שבחרתם בנו, ניצור איתכם קשר בעוד  שני ימי עסקים',
        imageUrl: '../image/homepicture.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    localStorage.removeItem('userCart')
    localStorage.removeItem('cartTotal')
}

function validateCardNumber(cardNumber) {
  if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
    return false;
  }
  return true;
}

function validateExpirationDate(month, year) {
  let expirationDate = new Date(`${year}-${month}-01`);
  let currentDate = new Date();
  return expirationDate > currentDate;
}

function validateCVC(cvc) {
  if (cvc.length !== 3 || !/^\d+$/.test(cvc)) {
    return false;
  }
  return true;
}

}



//function that is checking if the customer had chosen 
//a type of payment "achrai" or"aavara" 
//I used it in the payment function on submit
function checkPayType() {
    let paymentRadios = document.querySelectorAll('input[name="payMode"]');
    let selectedPay = false;
    let typePay = '';
    for (var i = 0; i < paymentRadios.length; i++) {
        if (paymentRadios[i].checked) {
            selectedPay = true;
            typePay = paymentRadios[i].value;
            break;
        }
    }

    if (selectedPay)
        return true;
    else
        return false;


}

//function to load the library of sweetAlert2 befor the page is loading
//(used for all the swal.fire alert in almost all the pages )
//this function append on DOMContentLoaded 
function SingleOnload() {
    const columnDefs = [
        { field: "cdn" },
        { field: "url" },
    ];

    const rowData = [
        { cdn: "jsDelivr", url: "https://www.jsdelivr.com" },
        { cdn: "Unpkg", url: "https://Unpkg.com" },
        { cdn: "cdnJS", url: "https://cdnjs.com" }
    ];


    const gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        /* allow manual copy and paste */
        enableCellTextSelection: true,
        ensureDomOrder: true
    };

    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
};