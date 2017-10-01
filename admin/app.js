/* eslint-env browser */

import $ from 'jquery';
import 'typeface-khula';
import 'typeface-roboto';

import AppController from './controllers/app.controller';
import ClientController from './controllers/client.controller';
import EntityController from './controllers/entity.controller';
import LoginController from './controllers/login.controller';

// import images so webpack will include them
import './assets/images/logo-purple.svg';
import './assets/images/favicon-16x16.png';

const controllers = {
  client: ClientController,
  entity: EntityController,
  login: LoginController
};

$(() => {
  const appCtrl = new AppController();
  appCtrl.registerActions();
  controllers.app = appCtrl;

  const ctrlName = $('body').data('controller');
  if (ctrlName && ctrlName in controllers) {
    console.log(`Registering controller: ${ctrlName}`); // eslint-disable-line no-console
    const ctrl = new controllers[ctrlName](appCtrl);
    appCtrl.registerActions(ctrl);
    ctrl.init();

    controllers[ctrlName] = ctrl;
  }
});
