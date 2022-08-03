import { React } from 'react';

const ListItem = (props) => {
  const { id, name, img, price, quantity, minusItem, plusItem } = props;

  return (
    <div className="mb-8 flex justify-between" key={id}>
      <img alt="" src={img} className='w-[100px] h-[100px]' />
      <div className="items-center min-w-[100px]">
        <span>{name}</span>
        <div className="flex justify-between mt-4">
          <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]" onClick={() => minusItem(id, -1)}>-</button>
          <span>{quantity}</span>
          <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]" onClick={() => plusItem(id, +1)}>+</button>
        </div>
      </div >
      <div>$ {price}</div>
    </div>
  )
}

export default ListItem;
