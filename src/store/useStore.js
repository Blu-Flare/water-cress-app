import { create } from 'zustand';

const initialQuoteForm = {
  name: '',
  phone: '',
  service: '',
  details: '',
};

/**
 * Global application state.
 * - Mobile navigation (used by the sticky mobile CTA / navbar)
 * - Quote request form, persisted while the user moves between pages
 * - Archive project modal, opened from any project card
 */
export const useStore = create((set) => ({
  // Navigation
  mobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),

  // Quote form
  quoteForm: initialQuoteForm,
  setQuoteField: (field, value) =>
    set((state) => ({
      quoteForm: { ...state.quoteForm, [field]: value },
    })),
  resetQuoteForm: () => set({ quoteForm: initialQuoteForm }),

  // Archive modal
  isModalOpen: false,
  activeProject: null,
  openModal: (project) =>
    set({ isModalOpen: true, activeProject: project }),
  closeModal: () => set({ isModalOpen: false, activeProject: null }),
}));
