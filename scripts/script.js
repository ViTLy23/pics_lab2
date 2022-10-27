window.addEventListener('DOMContentLoaded', function() {
    var userText = document.getElementById('text-to-work');
    var result = document.getElementById('output');
    var Encrypt = document.getElementById('encrypt-btn');
    var Decrypt = document.getElementById('decrypt-btn');
    var Reset = document.getElementById('reset-btn');
    var TextToWork;
    var pos;

    
    var EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];
    var UkrAlfUp = ['А','Б','В','Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я'];
    var UkrAlfLower = ['а','б','в','г','ґ','д','е','є','ж','з','и','і','ї','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ь','ю','я'];


    var EngAlfUpEncrypt = Array(26); 
    var EngAlfLowerEncrypt = Array(26);
    var UkrAlfUpEncrypt = Array(33);
    var UkrAlfLowerEncrypt = Array(33);

    
    
})