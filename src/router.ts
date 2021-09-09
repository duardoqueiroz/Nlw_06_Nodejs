import { Router } from 'express'
import { CreateUsercontroller } from './controllers/CreateUsersControllers'
import { CreateTagsControllers } from './controllers/CreateTagsControllers'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentsController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserReceiverComplimentsService } from './service/ListUserReceiverComplimentsService'
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController'
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()
const createUserController = new CreateUsercontroller()
const createTagController = new CreateTagsControllers()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentsController()
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController()
const listUserSenderComplimentsController =
  new ListUserSenderComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post('/register', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post(
  '/tags/add',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
router.post(
  '/compliments/add',
  ensureAuthenticated,
  createComplimentController.handle
)
router.get(
  '/compliments/sent',
  ensureAuthenticated,
  listUserSenderComplimentsController.handle
)
router.get(
  '/compliments/received',
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUsersController.handle)
export { router }
