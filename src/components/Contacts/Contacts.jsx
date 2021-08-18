import React, { Component } from 'react'
import "./Contacts.css"

export class Contacts extends Component {
  render() {
    return (
      <div class="contacts">
        <div className="contact">
          <h2>Контакты</h2>
          <ul>
            <li>+996 (770) 800-688</li>
            <li>+996 (777) 950-099</li>
            <li>+996 (222) 750-075</li>        
          </ul>
        </div>
        
        <div className="contact">
          <h2>Адреса</h2>
          <ul>
            <li>ул. Московская, 150 (пер. Исанова)</li>
            <li>пр. Мира, 58 (пер. Айни)</li>
            <li>ул. Ибраимова, 108 (пер.Чуй)</li>
          </ul>
        </div>
        
      </div>
    )
  }
}

export default Contacts
