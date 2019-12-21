import Chart from 'chart.js';
import { initGlobalOptions } from "@/argon-dashboard/components/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
}
