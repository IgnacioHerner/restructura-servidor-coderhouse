import expres from 'express'
import session from 'express-session'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import passport from 'passport'
import MongoStore from 'connect-mongo'

// import cookieParser from 'cookie-parser'

import initializePassport from './config/passport.config.js'
import { MONGO_DB_NAME, MONGO_URI } from "./config/config.js";
import productsRouter from './routes/products.routes.js'
import cartsRouter from './routes/carts.routes.js'
import sessionRouter from './routes/session.routes.js'

// import { passportCall } from './utils.js'
import { mongoConnection } from './config/mongoConnection.js'

mongoose.set('strictQuery', false)

const app = expres()

app.use(
    session({
        store: MongoStore.create({
            mongoUrl:MONGO_URI,
            dbName:MONGO_DB_NAME
        }),
        secret: 'c0der',
        resave: true,
        saveUninitialized: true
    })
)

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/api/session/login");
  };

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')


app.use('/api/products', ensureAuthenticated , productsRouter)
app.use('/api/carts', ensureAuthenticated , cartsRouter)
app.use('/session', sessionRouter)

mongoConnection(app)