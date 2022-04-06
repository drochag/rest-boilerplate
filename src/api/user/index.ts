import { Request, Response, Router } from 'express'
import prisma from '../../prisma'

const router = Router()

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup User
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiUse listParams
 * @apiSuccess {Object[]} users List of users.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */
router.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

export default router
