import {Page ,Locator, test, expect} from 'playwright/test';

export class ProductListPage
{
    page: Page;
    addToCartButton!: Locator;
    cardBadgeIcon!: Locator;
    cardIcon!: Locator;

    constructor(page : Page)
    {
        this.page = page;
        this.addToCartButton =page.locator('id="add-to-cart-sauce-labs-backpack"');
        this.cardBadgeIcon = page.locator("shopping_cart_container");

    }
     async clickAddtoCard()
     {
        await this.addToCartButton.click();
     }
     async ClickCartIcon()
     {
        await this.cardIcon.click();
     }
    



}