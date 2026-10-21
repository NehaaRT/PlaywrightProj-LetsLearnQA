import {Page ,Locator} from 'playwright/test'

export class LoginPage
{
    page :Page;
    usernameFeild : Locator;
    passwordFeild :Locator;
    loginButton :Locator;
     
    constructor(page : Page)
    {
      this.page =page;
      this .usernameFeild =page.locator("#user-name");
      this.passwordFeild=page.locator("#password");
      this.loginButton=page.locator('#login-button');
    }

    async openApplication()
    {
        await this.page.goto("https://www.saucedemo.com")
    }
    async doLogin()
    {
        await this.usernameFeild.fill('standard_user');
        await this.passwordFeild.fill('secret_sauce');
        await this.loginButton.click();
    }

}
