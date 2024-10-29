# Databricks notebook source

import numpy as np

# Type the following on the next line: a = np.array([1,2,3])

# COMMAND ----------

df = spark.sql("""
select carat, cut, color, price 
from default.diamonds
where price < 350
""")

# COMMAND ----------

# MAGIC %md
# MAGIC ### Improved code editing with Monaco
# MAGIC To enable the new editor in the Notebook:
# MAGIC 
# MAGIC 1. Click your username at the top right of the workspace and select **User Settings** from the drop down.
# MAGIC 2. Click the **Notebook Settings** tab.
# MAGIC 3. Check the box next to **Turn on the new notebook editor**.

# COMMAND ----------

# MAGIC %md
# MAGIC ### Autocomplete-as-you-type
# MAGIC <br>
# MAGIC <img src="https://github.com/databricks/notebook_gallery/blob/main/assets/bordered/autocomplete.gif?raw=true" width=600/>

# COMMAND ----------

# MAGIC %sql
# MAGIC select carat, cut, color, price
# MAGIC from default.diamonds
# MAGIC where price < 350
