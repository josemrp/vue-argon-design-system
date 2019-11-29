import Badge from "@/components/argon-dashboard/Badge";
import BaseAlert from "@/components/argon-dashboard/BaseAlert";
import BaseButton from "@/components/argon-dashboard/BaseButton";
import BaseCheckbox from "@/components/argon-dashboard/BaseCheckbox";
import BaseInput from "@/components/argon-dashboard/BaseInput";
import BaseDropdown from "@/components/argon-dashboard/BaseDropdown";
import BaseNav from "@/components/argon-dashboard/BaseNav";
import BasePagination from "@/components/argon-dashboard/BasePagination";
import BaseProgress from "@/components/argon-dashboard/BaseProgress";
import BaseRadio from "@/components/argon-dashboard/BaseRadio";
import BaseSlider from "@/components/argon-dashboard/BaseSlider";
import BaseSwitch from "@/components/argon-dashboard/BaseSwitch";
import BaseTable from "@/components/argon-dashboard/BaseTable";
import BaseHeader from "@/components/argon-dashboard/BaseHeader";
import Card from "@/components/argon-dashboard/Card";
import StatsCard from "@/components/argon-dashboard/StatsCard";
import Modal from "@/components/argon-dashboard/Modal";
import TabPane from "@/components/argon-dashboard/Tabs/TabPane";
import Tabs from "@/components/argon-dashboard/Tabs/Tabs";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Card.name, Card);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Modal.name, Modal);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
  }
};
