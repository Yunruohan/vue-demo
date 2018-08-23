import showBlog from './components/showBlog.vue'
import addblog from './components/addblog.vue'
import Singblog from './components/Singblog.vue'
export default[
  {path:"/",component:showBlog},
  {path:"/add",component:addblog},
  {path:"/Singblog/:id",component:Singblog},
]
