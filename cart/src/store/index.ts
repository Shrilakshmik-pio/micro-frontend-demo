import create from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemName: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (newItem: CartItem) =>
    set((state: CartState) => {
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.name === newItem.name
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          )
        };
      }

      return {
        items: [...state.items, newItem]
      };
    }),

  removeItem: (itemName: string) =>
    set((state: CartState) => ({
      items: state.items.filter((item) => item.name !== itemName)
    })),

  clearCart: () =>
    set(() => ({
      items: []
    }))
}));

