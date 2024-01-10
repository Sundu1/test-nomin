"""Added a new column to the BudgetSpen

Revision ID: 1b2672807887
Revises: 65579420fe22
Create Date: 2023-12-11 10:40:49.596685

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1b2672807887'
down_revision = '65579420fe22'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('budget_spend', 'sender_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('budget_spend', 'reciever_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('budget_spend', 'reciever_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('budget_spend', 'sender_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###