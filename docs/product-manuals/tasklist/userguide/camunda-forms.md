---
id: camunda-forms
title: Camunda Forms
---

## What are Camunda Forms?

Camunda Forms is one of the ways of editing and completing a User Task on Tasklist. These Forms can be created on the Camunda Modeler where they can also be embedded to the BPMN file with your Diagram and assign a Form to a User Task.

After deploying a Diagram with an embedded Form, Tasklist will import this Form schema to the API where every Task that is assigned to this Form will be related to the Form schema on the API.

All new Tasks that have a Form assigned to it on the BPMN Diagram will render the Form modeled on the Camunda Modeler. The fields will be prefilled with Variables with the same names as the respective fields. When the Task is completed, Variables will be updated or created based on the field names of the Form.

## How to use them?
