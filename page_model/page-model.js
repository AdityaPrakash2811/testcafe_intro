import { Selector, t } from 'testcafe';

const label = Selector('label');
const option = Selector('option')

class Feature {
    constructor (text) {
        this.label    = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class OperatingSystem {
    constructor (text) {
        this.label       = label.withText(text);
        this.radioButton = this.label.find('input[type=radio]');
    }
}

class InterfaceList {
    constructor (text) {
       this.option = option.withText(text);
    }
}

class Page {
    constructor () {
        this.nameInput             = Selector('#developer-name');
        this.triedTestCafeCheckbox = Selector('#tried-test-cafe');
        this.populateButton        = Selector('#populate');
        this.submitButton          = Selector('#submit-button');
        this.results               = Selector('.result-content');
        this.commentsTextArea      = Selector('#comments');
        this.interfaceSelect       = Selector('#preferred-interface');
        //this.interfaceSelectOption = this.interfaceSelect.find('option');

        this.featureList = [
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Running tests in background and/or in parallel in multiple browsers'),
            new Feature('Easy embedding into a Continuous integration system'),
            new Feature('Advanced traffic and markup analysis')
        ];

        this.osList = [
            new OperatingSystem('Windows'),
            new OperatingSystem('MacOS'),
            new OperatingSystem('Linux')
        ];

        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick:   Selector('.slider-value')
        };

        this.interfaceList = [
            new InterfaceList('Command Line'),
            new InterfaceList('JavaScript API'),
            new InterfaceList('Both')
        ];

        this.submitButton          = Selector('#submit-button');
    }

}

export default new Page();