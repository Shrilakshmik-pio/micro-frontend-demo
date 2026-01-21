import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(i => i.name === item.name);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.name === item.name
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        };
      }
      return { items: [...state.items, item] };
    }),

  removeItem: (name) =>
    set((state) => ({
      items: state.items.filter(i => i.name !== name)
    })),

  clearCart: () => set({ items: [] })
}));

