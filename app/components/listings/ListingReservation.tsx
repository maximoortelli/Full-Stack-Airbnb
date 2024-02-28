"use client";
import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div>

      <div
        className="
                bg-white rounded-xl
                 border-[1px] border-neutral-200
                 overflow-hidden p-2">
         
         <div className="
             text-2xl flex flex-row text-center 
             items-center justify-center gap-2 font-semibold pb-2"> $ {price}
             
             <div className="font-light flex flex-row text-sm items-center text-neutral-600">
                 Per night
             </div>
         </div>

        <hr />
        <div className="flex flex-row items-center justify-center gap-1 p-4">
          <Calendar
            value={dateRange}
            disabledDates={disabledDates}
            onChange={(value) => onChangeDate(value.selection)}
          />
        </div>
        <hr />
          <div className="
                 p-4 flex flex-row
                 items-center justify-evenly
                 font-semibold text-lg">
                 <div>Total price:</div>
                 <div className="ml-[-7vw]">$ {totalPrice}</div>
          </div>
          <hr />
          <div className="p-4">
            <Button 
                disabled={disabled}
                label="Reserve"
                onClick={onSubmit}
                />
        </div>
      </div>
    </div>
  );
};

export default ListingReservation;
