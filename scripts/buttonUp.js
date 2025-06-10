const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      // возврат в самый верх строницы по клику
      this.el.onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // плавное возвращение
        });
      }
    }
  }
  
  btnUp.addEventListener();