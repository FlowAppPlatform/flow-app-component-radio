import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class RadioComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/radio-component.png',
    name: 'Radio',
    type: 'ui-component',
    componentType: 'radio',
    category: 'Inputs',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: false
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the radio',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the radio button',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...RadioComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return (
      <div className="radio-container">
        <label htmlFor="radio" className="radio-label">
          <input
            type="radio"
            name="checkbox"
            id="radio"
            value="true"
            className="radio-input"
          />
          Radio
        </label>
      </div>
    );
  }
}

export default RadioComponent;
