import { Selector } from "testcafe";

fixture`Family Summary Tests`
  .page('https://portal.qa.kidsxap.com.au/');
  

test('New Test', async (t: TestController) => {
    await t
        .typeText('#txtUserName', 'pk@xaptech.com.au')
    await t
        .typeText('#txtPassword', 'Abcd1234$')
        .click('#btnLogin')
    await t
        .click('header .plus.ant-dropdown-link.ant-dropdown-trigger')
    await t
        .click(Selector('#cdk-overlay-0 li').withText('Add Family'))
    await t
        .click('#ddlCentre .dx-texteditor-input')
    await t
        .click(Selector('#dx-b28e35d4-4ade-011f-a888-a9e9536f961d div').withText('Crinkle Kids').nth(5))
    await t
        .typeText('#txtAddFamilyFirstName .dx-texteditor-input', 'Aaron')
    await t
        .typeText('#txtAddFamilyLastName .dx-texteditor-input', 'Hiddleston')
    await t
        .click('#dtAddFamilyDOB .dx-dropdowneditor-icon')
    await t
        .click('#dx-01e3e6fe-5627-871a-3d55-b47895619f5a .dx-icon.dx-icon-chevronleft')
    await t
        .click('#dx-01e3e6fe-5627-871a-3d55-b47895619f5a .dx-icon.dx-icon-chevronleft')
    await t
        .click('#dx-01e3e6fe-5627-871a-3d55-b47895619f5a .dx-icon.dx-icon-chevronleft')
    await t
        .click(Selector('#dx-01e3e6fe-5627-871a-3d55-b47895619f5a span').withText('1990'))
    await t
        .click(Selector('#dx-01e3e6fe-5627-871a-3d55-b47895619f5a td').withText('Feb'))
    await t
        .click(Selector('#dx-01e3e6fe-5627-871a-3d55-b47895619f5a span').withText('15'))
    await t
        .click('#ddlRelationtochild .dx-texteditor-input')
    await t
        .click(Selector('#dx-5d641662-2a06-4a3a-9bac-bbc6c9ea9e61 div').withText('Father').nth(5))
    await t
        .typeText('#txtAddFamilyEmail .dx-texteditor-input', 'aaron.hiddleston@gmail.com')
    await t
        .typeText('#txtHeadOfficeMobileNumber .dx-texteditor-input', '0412345678')
    await t
        .typeText('#txtAddFamilyCRN .dx-texteditor-input', '789546321V')
    await t
        .typeText('#txtAddOrganisationStreetAddress .dx-texteditor-input.pac-target-input', '23')
        .click(Selector('span').withText('Somerton Park SA, Australia'))
    await t
        .click('#autAddOrganisationSuburb .dx-texteditor-input')
    await t
        .click('#ddlAddOrganisationState .dx-dropdowneditor-icon')
    await t
        .click('#ddlAddOrganisationState .dx-dropdowneditor-icon')
    await t
        .click('#txtAddOrganisationPostcode .dx-texteditor-input')
    await t
        .typeText('#txtAddFamilyChildFirstName .dx-texteditor-input', 'Amanda')
    await t
        .typeText('#txtAddFamilyChildLastName .dx-texteditor-input', 'Hiddleston')
    await t
        .click('#dtAddFamilyChildDOB .dx-dropdowneditor-icon')
    await t
        .click(Selector('#dx-8c2c930d-5aab-49ba-d20e-611e4cdbd719 span').withText('2021'))
    await t
        .click(Selector('#dx-8c2c930d-5aab-49ba-d20e-611e4cdbd719 span').withText('Mar'))
    await t
        .click(Selector('#dx-8c2c930d-5aab-49ba-d20e-611e4cdbd719 td').withText('3').nth(1))
    await t
        .typeText('#txtAddFamilyChildCRN .dx-texteditor-input', '3695874215V')
    await t
        .typeText('#txtAddFamilyChildCRN .dx-texteditor-input', 'V')
    await t
        .click(Selector('#ddlGuardian').nth(1).find('.dx-texteditor-input'))
    await t
        .click(Selector('#dx-3774d431-ed28-e0ae-7a9e-d36e89d848d5 div').withText('Direct To Centre').nth(5))
    await t
        .click('#chkIsDefault .dx-checkbox-icon')
    await t
        .click('#chkIsDefault .dx-checkbox-icon')
    await t
        .typeText('#txtAddFamilyName .dx-texteditor-input', ' 2')
    await t
        .click(Selector('#btnAddProviderCancel span').withText('Add Tag'))
    await t
        .typeText('#tagFamilyTagList .dx-texteditor-input', 'anyTag')
        .pressKey('enter')
    await t
        .click(Selector('#btnSelectProfile span').withText('Upload an Image'))
    await t
        .setFilesToUpload('#fileProfile', ['..\\..\\..\\_uploads_\\blank-profile-picture-973460_1280.png'])
    await t
        .click(Selector('#btnAddProviderSave span').withText('Add Family'))
    
});
