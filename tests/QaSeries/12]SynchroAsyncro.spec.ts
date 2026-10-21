 
import { test } from '@playwright/test';

//Asynchronous — Don't wait
test('Asynchronous Example', async ({ page }) => {

    console.log("Person 1: Order coffee");

    const coffee = new Promise<string>((resolve) => {

        setTimeout(() => {
            resolve("Person 1: Coffee is ready");
        }, 3000);

    });

    console.log("Person 3: Sit and wait");

    const result = await coffee;

    console.log(result);

});                                     /*Person 1: Order coffee
                                         Person 3: Sit and wait
                                         Person 1: Coffee is ready*/

//---------------------------------------------------------------------------
//1. Synchronous — One by One

test('Synchronous Example', async ({ page }) => {

    console.log("Person 1: Order coffee");

    console.log("Person 1: Coffee received");

    console.log("Person 2: Now order coffee");

});


