/*
 *
 **/
//#home.js
import {DOM, Element, Scroller} from '../lib';
import {model_b, model_c, model_d, model_e, model_f} from '../model/card';
import '../styles/detail.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();
const s = new Scroller();

/* Init */
d.id('tachion').innerHTML = '';
s.enableScroller();

/* Functions */
function last_block(element) {
  let model_f_wrapper = e.i('div', {'class': 'msg_wrapper_f'}).t(element);
  model_f(model_f_wrapper,
    'icon_3_1', 'Received 1st payment', '$10 will received more upcoming weeks');
  e.i('div', {'class': 'br_black'}).t(model_f_wrapper);
  model_f(model_f_wrapper, 'icon_3_2', 'Discount coupon received', 'clicked to see detail');
}

function slide_area(element) {
  let wrapper = e.i('div', {
    'class': 'slide_area_detail', 'id': 'slide_area_detail'
  }).t(element);
  model_e(wrapper,
    'icon_1_5',
    'Privacy protection',
    'data anonymization',
    () => {
      model_e(wrapper,
        'icon_1_5',
        'Contract auditiing & signing',
        'verify & auditing & signed',
        () => {          
          e.i('div', {'class': 'white_space_detail'}, {}, '&nbsp;').t(wrapper)          
          last_block(safe_detail);
        }, true
      );
    }
  );
  
}

/* DOM */
//@navigator
let navigator = e.i('div', {'class': 'navigator'}).t(d.id('tachion'));
e.i('div', {'class': 'left left_navigator'}, {
  'touchstart': () => {
    window.location.hash = '#panel';
    require('./panel');
    window.location.reload();
  }
}).t(navigator);

//@structure
let page_detail = e.i('section', {'class': 'page page_detail'}).t(d.id('tachion'));
let safe_detail = e.i('div', {'class': 'safe safe_detail'}).t(page_detail);

//@card_a
let card_a_wrapper = e.i('div', {'class': 'card_a_wrapper'}).t(safe_detail);
model_b(card_a_wrapper, 'icon_1_1', 'Healthier body', '3 health indicator improved');
e.i('div', {'class': 'br'}).t(card_a_wrapper);
model_c(card_a_wrapper, 'icon_1_2', 'Healthier heart', 'Resting heart raxte lower -10%');
model_c(card_a_wrapper, 'icon_1_3', 'Good shape', 'BMI lower -5%');
model_c(card_a_wrapper, 'icon_1_4', 'More energetic', 'VO2max raised +3%');

model_d(safe_detail, 'icon_1_5',
  '3 vital data for 3 month',
  '$10 per week plus physical',
  'check-up discount',
  () => slide_area(safe_detail)
);