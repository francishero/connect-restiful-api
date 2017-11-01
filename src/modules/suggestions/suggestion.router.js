const router=require('express-promise-router')()
import * as suggestionController from './suggestion.controller'
import auth from '../../services/auth'

router.route('/')
      .post(auth,suggestionController.postSuggestion)
      .get(suggestionController.getAllSuggestions)
router.route('/:suggestionId')
      .get(suggestionController.getSuggestion)

export default router;
