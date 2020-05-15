<script>
export default {
  functional: true,
  props: {
    template: String,
    data: { type: Object, default: () => ({}) },
  },
  render(createElement, context) {
    const template = context.props.template;
    const dynComponent = {
      template,
      data() {
        return context.props.data == null ? {} : context.props.data;
      },
    };
    return createElement(dynComponent);
  },
};
</script>
