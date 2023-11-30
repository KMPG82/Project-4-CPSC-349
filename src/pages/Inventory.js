import React from 'react';
import Layout from '../components/Layout';
import pb from '../lib/pocketbase';
import { Navigate } from 'react-router-dom';

export default function Inventory() {
    const isLoggedIn = pb.authStore.isValid;

    if (isLoggedIn) {
        return (
            <Layout>
              <section id="main__section">
                  <div className="title__container">
                      <div className="sub__title--container">
                          <h1 className="main__title">Upload Your Pokemon!</h1>
                          <a className="main__sub--title" href="https://www.pokemon.com/us/pokedex">Find your pokemon's picture to upload
                              here!</a>
  
                          <button className="card-button">add pokemon</button>
                          <h3>Copy Image Address and Paste it in the Picture Section!</h3>
                      </div>
                  </div>
                  
                  <div className="main__container">
                      <div className="collection-container" >
                          <div className="collection">
                              <div className="card" >
                                  <button className="card-button">Remove</button>
                                  <div className="top-bar" >
                                      <div className="name">
                                          <p>Name</p>
                                      </div>
                                      <div className="level-container">
                                          <p>LV.</p>
                                          <div className="level">
  
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="pic-container">
                                      <div>
                                          <img className="img__pokemon"  src="" alt=''/>
  
                                      </div>
                                      <button className="card-button">Add pic of pokemon</button>
                                  </div>
  
                                  <div className="description">
                                      <div className="price-container">
                                          <p className="card-labels">Price</p>
                                          <div className="price">
  
                                          </div>
                                      </div>
                                      <div className="type-container">
                                          <p className="card-labels">Type(s)</p>
                                          <div className="type">
  
                                          </div>
                                      </div>
  
                                      <div className="abilities-container">
                                          <p className="card-labels">Moves</p>
                                          <div>
                                              <div className="ability">
  
                                              </div>
                                          </div>
                                          <button className="card-button">New move</button>
                                      </div>
                                      
                                      <div className="hp-container">
                                          <p className="card-labels">Hit Points</p>
                                          <div className="hp">
              
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
            </Layout>
        )
    }
    else {
        return (
            <Navigate replace to="/" />
        )
    }
}
