import React from 'react'
import { Switch, Route} from 'react-router-dom'

function Forget() {
    return (
        <div>
            Forget Page
                <Switch>
                    <Route exact path='/forget' component={Forget} />
                </Switch>
        </div>
        
    )
}

export default Forget
