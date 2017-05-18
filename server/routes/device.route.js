import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import deviceCtrl from '../controllers/device.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/devices - Get list of devices */
  .get(deviceCtrl.list)

  /** POST /api/devices - Create new device */
  .post(validate(paramValidation.createDevice), deviceCtrl.create);

router.route('/:deviceId')
  /** GET /api/devices/:deviceId - Get device */
  .get(deviceCtrl.get)

  /** PUT /api/devices/:deviceId - Update device */
  .put(validate(paramValidation.updateDevice), deviceCtrl.update)

  /** DELETE /api/devices/:deviceId - Delete device */
  .delete(deviceCtrl.remove);

/** Load device when API with deviceId route parameter is hit */
router.param('deviceId', deviceCtrl.load);

export default router;
