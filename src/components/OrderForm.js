import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Formik } from "formik";
import { CartContainer } from "../containers/CartContainer";
import { useNavigate } from "react-router-dom";

export function OrderForm() {
  const { cart, clearCart } = CartContainer.useContainer();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto grid grid-cols-2">
      <div>Введите ваши данные для оформления заказа</div>
      <Formik
        initialValues={{ name: "", phone: "" }}
        validate={(values) => {
          const errors = {};
          if (values.name.length < 2)
            errors.name = "Имя должно быть длинее 1 буквы";
          if (!values.name) {
            errors.name = "Обязательное поле";
          }
          if (!values.phone) {
            errors.phone = "Обязательное поле";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const { data: order } = await supabase
            .from("orders")
            .insert(values)
            .select()
            .single();

          await supabase
            .from("products_on_orders")
            .insert(
              cart.map((product) => ({
                product_id: product.id,
                order_id: order.id,
                count: 1,
              }))
            )
            .select();

          resetForm();
          clearCart();
          alert("Спасибо за заказ");
          navigate("/");
        }}
      >
        {(props) => (
          <form className="max-w-[300px] mx-auto" onSubmit={props.handleSubmit}>
            <div className="flex flex-col gap-4">
              <label for="name" className="flex flex-col gap-2">
                Имя
                {!!props.errors.name && (
                  <div className="text-red-500">{props.errors.name}</div>
                )}
                <input
                  id="name"
                  name="name"
                  className="outline"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
              </label>
              <label for="phone" className="flex flex-col gap-2">
                Номер телефона
                {!!props.errors.phone && (
                  <div className="text-red-500">{props.errors.phone}</div>
                )}
                <input
                  id="phone"
                  name="phone"
                  className="outline"
                  value={props.values.phone}
                  onChange={props.handleChange}
                />
              </label>
            </div>
            {props.isSubmitting && <div>Загрузка...</div>}
            <button disabled={props.isSubmitting}>Оформить заказ</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
