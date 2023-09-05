import {CgProfile} from 'react-icons/cg'

const Data = ({data}) => {
  return (
    <div className="flex flex-wrap gap-5 px-16 pt-10">
        {data.map((i) => (
            <div key={i.id} className="border shadow-lg flex p-4 flex-col gap-1">
                <img src={i.picture} className=" w-44 shadow-md rounded-md h-48" />
                <h1 className="font-medium flex gap-1 items-center mt-2"><CgProfile />{i.name}</h1>
                <div className="flex justify-between">
                    <p className="text-sm">${i.price}</p>
                    <p className="text-sm">${i.age}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Data