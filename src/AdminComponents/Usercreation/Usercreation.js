import React from 'react'

const Usercreation = () => {
  return (
    <>
    <div class="section grey lighten-5">
   <div class="container">
      <div class="row">
         <div class="col xl4 l6 m10 s12 offset-xl4 offset-l3 offset-m1">
            <h3 class="light center-align blue-text">Sign up form</h3>
            <div class="card">
               <div class="card-content">

                  <ul data-method="GET" class="stepper linear">
                     <li class="step active">
                        <div class="step-title waves-effect waves-dark">E-mail</div>
                        <div class="step-content">
                           <div class="row">
                              <div class="input-field col s12">
                                 <input id="email" name="email" type="email" class="validate" required></input>
                                 <label for="email">Your e-mail</label>
                              </div>
                           </div>
                           <div class="step-actions">
                              <button class="waves-effect waves-dark btn blue next-step" data-feedback="anyThing">Continue</button>
                           </div>
                        </div>
                     </li>
                     <li class="step">
                        <div class="step-title waves-effect waves-dark">Step 2</div>
                        <div class="step-content">
                           <div class="row">
                              <div class="input-field col s12">
                                 <input id="password" name="password" type="password" class="validate" required></input>
                                 <label for="password">Your password</label>
                              </div>
                           </div>
                           <div class="step-actions">
                              <button class="waves-effect waves-dark btn blue next-step">CONTINUE</button>
                              <button class="waves-effect waves-dark btn-flat previous-step">BACK</button>
                           </div>
                        </div>
                     </li>
                     <li class="step">
                        <div class="step-title waves-effect waves-dark">Callback</div>
                        <div class="step-content">
                          End!!!!!
                           <div class="step-actions">
                              <button class="waves-effect waves-dark btn blue next-step" data-feedback="noThing">ENDLESS CALLBACK!</button>
                           </div>
                        </div>
                     </li>
                  </ul>

               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    </>
  )
}

export default Usercreation