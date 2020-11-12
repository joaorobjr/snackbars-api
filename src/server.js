import app from './app.js';
import settings from './config/settings.js';
import db from './services/database.service.js';

app.listen(settings.port, () => {
  global.logger.info('Express server listening on port ' + settings.port);
  db.connectDB();
});
