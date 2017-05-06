/**
*
* ViewUnitList
*
*/

import React from 'react';
import Immutable from 'immutable';
import ViewUnitItem from '../ViewUnitItem';
import './styles.scss';

const mockData = Immutable.fromJS([
  {
    id: 1,
    name: 'Colours',
    description: 'Colours of the life',
    icon: 'https://image.freepik.com/free-vector/hand-drawn-happy-children-s-day-card_23-2147526572.jpg',
    cover: 'http://www.contactnumbers.co.in/wp-content/uploads/2013/11/Happy-childrens-day-cards-2013.jpg',
  },
  {
    id: 2,
    name: 'Languages',
    description: 'Colours of the life',
    icon: 'https://image.freepik.com/free-vector/hand-drawn-happy-children-s-day-card_23-2147526572.jpg',
    cover: 'http://www.contactnumbers.co.in/wp-content/uploads/2013/11/Happy-childrens-day-cards-2013.jpg',
  },
  {
    id: 3,
    name: 'Animals',
    description: 'Colours of the life',
    icon: 'https://image.freepik.com/free-vector/hand-drawn-happy-children-s-day-card_23-2147526572.jpg',
    cover: 'http://www.contactnumbers.co.in/wp-content/uploads/2013/11/Happy-childrens-day-cards-2013.jpg',
  },
  {
    id: 4,
    name: 'Computers',
    description: 'Colours of the life',
    icon: 'https://image.freepik.com/free-vector/hand-drawn-happy-children-s-day-card_23-2147526572.jpg',
    cover: 'http://www.contactnumbers.co.in/wp-content/uploads/2013/11/Happy-childrens-day-cards-2013.jpg',
  },
  {
    id: 5,
    name: 'Furniture',
    description: 'Colours of the life',
    icon: 'https://image.freepik.com/free-vector/hand-drawn-happy-children-s-day-card_23-2147526572.jpg',
    cover: 'http://www.contactnumbers.co.in/wp-content/uploads/2013/11/Happy-childrens-day-cards-2013.jpg',
  },
  {
    id: 6,
    name: 'Cars',
    description: 'Colours of the life',
    icon: 'https://image.freepik.com/free-vector/hand-drawn-happy-children-s-day-card_23-2147526572.jpg',
    cover: 'http://www.contactnumbers.co.in/wp-content/uploads/2013/11/Happy-childrens-day-cards-2013.jpg',
  },
]);

function ViewUnitList() {
  return (
    <div className="view-unit-list row">
      {mockData.map((unit) => (
        <ViewUnitItem key={unit.get('id')} unit={unit} />
      ))}
    </div>
  );
}

ViewUnitList.propTypes = {

};

export default ViewUnitList;
