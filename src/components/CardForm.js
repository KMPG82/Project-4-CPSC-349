import pb from '../lib/pocketbase';
import { useForm } from "react-hook-form";
import React, {useState} from 'react';

export default function CardForm(status) {
  const {register, handleSubmit} = useForm();
  const userId = pb.authStore.model.id;

  async function AddPokemon(data) {
    try {
      const card = await pb.collection('pokemon').create({
        field: userId,
        level: data.level,
        price: data.price,
        type: data.type,
        moves: data.move,
        name: data.name,
        hit_points: data.hp,
        image_url: data.image_url,
      });

      status.toggle();
      status.refresh();
  } catch (e) {
      alert(e);
    }
  }

  return (
    <form className="card__form" onSubmit={handleSubmit(AddPokemon)}>
      <div className="cardform__input__container">
        <div className='cardform__input'>
          <label className="cardform__input__text">Name:</label>
          <input className="cardform__input__data" type="text" id="cardform-name" name="name" placeholder="Name" {...register("name")} required/>
        </div>

        <div className='cardform__input'>
        <label className="cardform__input__text">Level:</label>
        <input className="cardform__input__data" type="text" id="cardform-level" name="level" placeholder="Level" {...register("level")} required/>
        </div>

        <div className='cardform__input'>
        <label className="cardform__input__text">Price:</label>
        <input className="cardform__input__data" type="text" id="cardform-price" name="price" placeholder="Price" {...register("price")} required/>
        </div>

        <div className='cardform__input'>
        <label className="cardform__input__text">Type(s):</label>
        <input className="cardform__input__data" type="text" id="cardform-type" name="type" placeholder="Type" {...register("type")} required/>
        </div>

        <div className='cardform__input'>
        <label className="cardform__input__text">Moves:</label>
        <input className="cardform__input__data" type="text" id="cardform-moves" name="moves" placeholder="Moves" {...register("move")} required/>
        </div>

        <div className='cardform__input'>
        <label className="cardform__input__text">Hit Points:</label>
        <input className="cardform__input__data" type="text" id="cardform-hp" name="hp" placeholder="Hit Points" {...register("hp")} required/>
        </div>

        <div className='cardform__input'>
        <label className="cardform__input__text">Image:</label>
        <input className="cardform__input__data" type="text" id="cardform-image" name="image_url" placeholder="Image Url" {...register("image_url")} required/>
        </div>

        <button className="cardform__button" type="submit">Submit</button>
      </div>
    </form>
  );
}