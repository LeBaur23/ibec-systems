<template>
  <header>
    <div class="header navbar-expand-md">
      <div class="header__logo">
      </div>
      <div class="header__info">
        <div class="header__account-name">
          My account
        </div>
        <div class="header__links">
          <div class="header__burger" data-toggle="collapse" data-target="#burger">
            &#9776;
          </div>
          <div class="header__links-wrapper collapse" id="burger">
            <div class="header__link"><span><nuxt-link to="/">Main</nuxt-link></span></div>
            <div class="header__link"><span>Accounts</span></div>
            <div class="header__link" @click="displayCategory()"><span>Payments</span></div>
            <div class="header__link" @click="displayCategory()" >
              <span data-toggle="collapse" data-target="#demo">
                Transfers
              </span>
              <no-ssr>
                <div class="header__link-info collapse" id="demo">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit
                    </li>
                    <li>
                      <span data-toggle="collapse" data-target="#asd">
                        Lorem ipsum dolor sit amet
                      </span>

                      <div class="collapse" id="asd">
                        <ul>
                          <li>asdasd</li>
                        </ul>

                      </div>
                    </li>
                    <li>asd</li>
                    <li>asd</li>
                  </ul>
                </div>
              </no-ssr>
            </div>
            <div class="header__link"><span>Purchase/sale of currency</span></div>
            <div class="header__link"><span><nuxt-link to="about">About</nuxt-link></span></div>
            <div class="header__link"><span><nuxt-link to="contacts">Contacts</nuxt-link></span></div>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        categories: {
          last: null,
          current: null
        }
      }
    },
    methods: {
      displayCategory() {
//        this.categories.last = event.target;
        this.categories.current = event.target;
        if (this.categories.last !== this.categories.current) {
          this.categories.last = event.target;


          this.categories.current = null;

        }
//        console.log(event.target);

      }
    }
  }
</script>
