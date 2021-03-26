import { Selector } from 'testcafe';

const inputString = 'Aditya1'

const inputQuerySelector = Selector('input#developer-name')
const checkBoxSelector = Selector('input#remote-testing')
const commentSelector = Selector('textarea#comments')

const dropDownSelector = Selector('select#preferred-interface')
const option = Selector('option').withText('JavaScript API')

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`


/*test('Input Text', async t => {
    await t
        .maximizeWindow()
        .typeText(inputQuerySelector, inputString, {speed:0.5})
});

test('Text Replace', async t => {
    await t
        .maximizeWindow()
        .typeText(inputQuerySelector, inputString, {speed:0.5})
        .typeText(inputQuerySelector, 'random', {replace:true})
});*/

/*test('CheckBox', async t => {
    await t
        .click(checkBoxSelector)
        .wait(2000)
});*/

/*test('Press Key', async t => {
    await t
        .typeText(inputQuerySelector, inputString, {speed:0.5})
        .pressKey('end left . delete *')
        .wait(2000)
});*/

/*test('Select Text', async t => {
    await t
        .typeText(inputQuerySelector, inputString, {speed:0.5})
        .selectText(inputQuerySelector, 4, 0)
        .wait(2000)
});*/

/*test('hover', async t =>{
    await t
        .hover(commentSelector)
        .wait(4000)
})*/

/*test('navigate', async t =>{
    await t
        .typeText(inputQuerySelector, inputString, {speed:0.5})
        .navigateTo(`http://techblog.geekyants.com/`)
        .wait(2000)
})*/

/*test('screenshot', async t =>{
    await t
        .typeText(inputQuerySelector, inputString, {speed:0.5})
        .takeScreenshot('output.png')
        .wait(2000)
})*/

test('screenshot', async t =>{
    await t
        .click(dropDownSelector)
        .wait(2000)
        .click(option)
        .wait(2000)
})
