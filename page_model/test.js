import page from './page-model';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});

test('Select Radio Button', async t => {
    for (const os of page.osList) {
        await t
            .click(os.label)
            .expect(os.radioButton.checked).ok();
    }
});

test('Dropdown', async t => {
    for (const interfaceItem of page.interfaceList) {
        await t
            .click(page.interfaceSelect)
            .click(interfaceItem.option)
            .wait(2000)
    }
});

test('tried test cafe and slider', async t => {
    await t
        .click(page.triedTestCafeCheckbox)
        .wait(2000)
        .drag(page.slider.handle, 360, 0, { offsetX: 10, offsetY: 10 }) 
        .wait(3000)
})

test('test comment section', async t => {
    await t
        .click(page.triedTestCafeCheckbox)
        .wait(1000)
        .typeText(page.commentsTextArea, 'Test Area for comments',{speed: 0.5})
        .wait(3000)
})
