;
function Content() {
    this.html = "";
}

Content.prototype.addContent = function() {

    this.createHeader();
    this.createSlide_1();
    this.createText("ИИ, который обучался в интернете на определённых ресурсах выдал любопытный результат. Какими правилами управляется ИИ? В некотором роде его поведение зависит от базовой конфигурации. Как легко он может перейти на \"тёмную сторону силы\"?<br><br>*** It is done! ***<br><br>&mdash; сказал он<br> и выдал несколько результатов своей воспалённой фантазии.");
    this.createSlide_2();

    return this.html;

}

Content.prototype.createHeader = function() {

    this.html += `<header class="header">
            <div class="logo">sunora</div>
            <div class="header-menu">
                <img src="img/menu_icon.png" alt="">
            </div>
        </header>`;

    this.createText("На сколько легко стать предметом стёба ИИ-бота - нецензурщика?.");

}

Content.prototype.createText = function(text) {

    this.html += `<p class="m-text-p">${text}</p>`;
}

Content.prototype.createSlide_1 = function() {

    if (data) {
        this.html += `<section class="cont">
                        <div class="itcss">
                        <div class="itcss__wrapper">
                            <div class="itcss__items">`;

        for (var i = 0; i < data.length; i++) {
            this.html += `<div class="itcss__item">
                            <div>
                                <p style="${data[i].top}" class="itcss__p">${data[i].title}</p>
                                <div class="itcss__stars">`;

        for (var n = 0; n < data[i].stars; n++) {

            this.html += `<img src="img/star_86960.png">`;

        }
            this.html += `</div>
                            <img class="itcss__img" src="${data[i].src}" >
                            </div>
                        </div>`;
        }

        this.html += `<div class="itcss__item">
                            <div style="height: 250px;">
                            <img src="img/download.gif" style="width:40px;position:absolute;top:45%;left:45%;">
                            </div>
                        </div>`;

        this.html += `</div>
                    </div>
                    <button class="itcss__btn itcss__btn_prev" role="button" data-slide="prev"></button>
                    <button class="itcss__btn itcss__btn_next" role="button" data-slide="next"></button>
                </div>
            </section>`;
    } else {
        this.html = "No content";
    }

}

Content.prototype.createSlide_2 = function() {

    if (data_2) {
        this.html += `<section class="cont">
                        <div class="itcss slider2">
                        <div class="itcss__wrapper">
                            <div class="itcss__items">`;

        for (var i = 0; i < data_2.length; i++) {

            this.html += `<div class="itcss__item"><img class="itcss__img" src="${data_2[i].src}" ></div>`;
        }

        this.html += `</div>
                        </div>
                        <button class="itcss__btn itcss__btn_prev" role="button" data-slide="prev"></button>
                        <button class="itcss__btn itcss__btn_next" role="button" data-slide="next"></button>
                    </div>
                </section>`;
    } else {
        this.html = "No content";
    }

}
