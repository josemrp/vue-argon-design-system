import Chart from 'chart.js';
import { initGlobalOptions } from "@/components/argon-dashboard/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
}
