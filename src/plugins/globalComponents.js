import Badge from "@/components/argon-design-system/Badge";
import BaseAlert from "@/components/argon-design-system/BaseAlert";
import BaseButton from "@/components/argon-design-system/BaseButton";
import BaseCheckbox from "@/components/argon-design-system/BaseCheckbox";
import BaseInput from "@/components/argon-design-system/BaseInput";
import BasePagination from "@/components/argon-design-system/BasePagination";
import BaseProgress from "@/components/argon-design-system/BaseProgress";
import BaseRadio from "@/components/argon-design-system/BaseRadio";
import BaseSlider from "@/components/argon-design-system/BaseSlider";
import BaseSwitch from "@/components/argon-design-system/BaseSwitch";
import Card from "@/components/argon-design-system/Card";
import Icon from "@/components/argon-design-system/Icon";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
console.log(2)
