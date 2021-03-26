import { Selector } from 'testcafe';
import Colors from 'colors'

const inputString = 'GeekyAnts'

const inputQuerySelector = Selector('input.jfk-textinput')
const AppBar = Selector('div.appbar label')
const bodyText = Selector('div.lOTAE span')

fixture `Getting Started`
    .page `https://www.google.co.in/advanced_search`


test('Text', async t => {
    await t
        .maximizeWindow()
        .typeText(inputQuerySelector, inputString, {speed:0.5})
        .expect(inputQuerySelector.value).eql('GeekyAnts')

    const text1 = await inputQuerySelector.value;
    const text2 = await AppBar.innerText;
    const text3 = await bodyText.innerText;

    console.log(text1.red)
    console.log(text2.rainbow)
    console.log(text3.yellow)
});
