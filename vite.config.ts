import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
    alias : [
      { find : "@", replacement : "/src/*"},
      { find : "@pages", replacement : "/src/pages"},
      { find : "@router", replacement : "/src/router"},
      { find : "@validations", replacement : "/src/utils/validations.ts"},
      { find : "@services-interface", replacement : "/src/interfaces/services.ts"},
      // { find : "@modals", replacement : "/src/components/modals"},
      { find : "@data-service", replacement : "/src/utils/data-service.ts"},
      { find : "@service", replacement : "/src/service"},
      { find : "@auth-interface", replacement : "/src/interfaces/auth.ts"},
      { find : "@global-interface", replacement : "/src/interfaces/global.ts"},
    ]
  }
})
