'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' : 'data-bs-target="#xs-components-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' :
                                            'id="xs-components-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancelBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CancelBtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePassComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePassComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClosePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClosePopupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPersonFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactPersonFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataLossDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataLossDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditFiszkaFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditFiszkaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditGroupFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditGroupFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditInterviewFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditInterviewFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditSchoolFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditSchoolFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditUserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiszkaDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiszkaDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiszkaFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiszkaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FiszkiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiszkiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupFiszkaFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupFiszkaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupFiszkiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupFiszkiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewFiszkiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterviewFiszkiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterviewFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewUserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterviewUserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InterviewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InterviewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigatorCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigatorCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhoneCallFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneCallFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmitBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubmitBtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' : 'data-bs-target="#xs-pipes-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' :
                                            'id="xs-pipes-links-module-AppModule-fc02407689ff2b63a7e3f355c69ff463880be07fa0a126e4318f1838bfa7591e4af6d815003d34f5b157d67500037f12f4984625fd4c8a81bfe088a03a1185ce"' }>
                                            <li class="link">
                                                <a href="pipes/TranslateValuesPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TranslateValuesPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ErrorPageComponent.html" data-type="entity-link" >ErrorPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PasswordStrengthComponent.html" data-type="entity-link" >PasswordStrengthComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/GroupDetails.html" data-type="entity-link" >GroupDetails</a>
                            </li>
                            <li class="link">
                                <a href="classes/InterviewFiszki.html" data-type="entity-link" >InterviewFiszki</a>
                            </li>
                            <li class="link">
                                <a href="classes/SchoolDetails.html" data-type="entity-link" >SchoolDetails</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDetails.html" data-type="entity-link" >UserDetails</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactPersonService.html" data-type="entity-link" >ContactPersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DirectorService.html" data-type="entity-link" >DirectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailValidator.html" data-type="entity-link" >EmailValidator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FiszkaService.html" data-type="entity-link" >FiszkaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupsService.html" data-type="entity-link" >GroupsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InterviewsService.html" data-type="entity-link" >InterviewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhoneCallService.html" data-type="entity-link" >PhoneCallService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PhoneValidator.html" data-type="entity-link" >PhoneValidator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RentalCostService.html" data-type="entity-link" >RentalCostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolsService.html" data-type="entity-link" >SchoolsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IChangePassModel.html" data-type="entity-link" >IChangePassModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContactModel.html" data-type="entity-link" >IContactModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContactPersonModel.html" data-type="entity-link" >IContactPersonModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDirectorModel.html" data-type="entity-link" >IDirectorModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorAPIModel.html" data-type="entity-link" >IErrorAPIModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFiszkaModel.html" data-type="entity-link" >IFiszkaModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGroupModel.html" data-type="entity-link" >IGroupModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInterviewsModel.html" data-type="entity-link" >IInterviewsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILoginModel.html" data-type="entity-link" >ILoginModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPhoneCallsModel.html" data-type="entity-link" >IPhoneCallsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfileModel.html" data-type="entity-link" >IProfileModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRentalModel.html" data-type="entity-link" >IRentalModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IScheduleDaysModel.html" data-type="entity-link" >IScheduleDaysModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IScheduleModel.html" data-type="entity-link" >IScheduleModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISchoolInRegionStatsModel.html" data-type="entity-link" >ISchoolInRegionStatsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISchoolModel.html" data-type="entity-link" >ISchoolModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IShowDetails.html" data-type="entity-link" >IShowDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatsModel.html" data-type="entity-link" >IStatsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITokenModel.html" data-type="entity-link" >ITokenModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateContactModel.html" data-type="entity-link" >IUpdateContactModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateContactPersonModel.html" data-type="entity-link" >IUpdateContactPersonModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateDirectorModel.html" data-type="entity-link" >IUpdateDirectorModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateFiszkaModel.html" data-type="entity-link" >IUpdateFiszkaModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateGroupModel.html" data-type="entity-link" >IUpdateGroupModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateInterviewsModel.html" data-type="entity-link" >IUpdateInterviewsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdatePhoneCallsModel.html" data-type="entity-link" >IUpdatePhoneCallsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateRentalModel.html" data-type="entity-link" >IUpdateRentalModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateScheduleDaysModel.html" data-type="entity-link" >IUpdateScheduleDaysModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateScheduleModel.html" data-type="entity-link" >IUpdateScheduleModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateSchoolModel.html" data-type="entity-link" >IUpdateSchoolModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdateUserModel.html" data-type="entity-link" >IUpdateUserModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserModel.html" data-type="entity-link" >IUserModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserStatsModel.html" data-type="entity-link" >IUserStatsModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});