import Timeline from 'primevue/timeline';


<template>
  <div class="timeline">
    <div class="timeline-item" v-for="comment in comments" v-bind:key="comment.id || comment.date">
      <div class="timeline-item-date">{{ comment.date }}</div>
      <div class="timeline-item-content">{{ comment.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.timeline {
  background-color: #fff; /* White background */
  border: 1px solid #ddd; /* Light gray border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Inner padding */
  position: relative; /* Needed for timeline line positioning */
}

.timeline::after {
  content: '';
  position: absolute;
  top: 5px; /* Adjust to align with item content */
  left: 50%;
  width: 2px; /* Timeline line width */
  height: calc(100% - 10px); /* Full height minus padding */
  background-color: #ddd; /* Light gray line color */
}

.timeline-item {
  display: flex; /* Allow for horizontal layout of date and content */
  align-items: center; /* Vertically align content within item */
  margin-bottom: 15px; /* Spacing between items */
  position: relative; /* Needed for dot positioning */
}

.timeline-item:after {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(50% - 5px); /* Center dot minus half its width */
  width: 10px; /* Dot diameter */
  height: 10px;
  border-radius: 50%; /* Circular dot */
  background-color: #ddd; /* Light gray dot color */
}

.timeline-item:nth-child(even)::after {
  background-color: #428bca; /* Blue dot color for even items */
}

.timeline-item-date {
  flex: 0 0 100px; /* Fixed width for date column */
  font-weight: bold;
  color: #333; /* Dark gray text color */
  margin-right: 10px; /* Spacing between date and content */
}

.timeline-item-content {
  flex: 1; /* Flexible width for content */
  color: #333; /* Dark gray text color */
}
</style>