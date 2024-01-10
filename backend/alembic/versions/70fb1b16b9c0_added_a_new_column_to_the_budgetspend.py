"""Added a new column to the BudgetSpend

Revision ID: 70fb1b16b9c0
Revises: 988096907462
Create Date: 2023-12-11 09:47:16.059943

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '70fb1b16b9c0'
down_revision = '988096907462'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('budget_spend', sa.Column('image', sa.String(), nullable=True))
    op.alter_column('budget_spend', 'monitaDateType_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('budget_spend', 'monitaDateType_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.drop_column('budget_spend', 'image')
    # ### end Alembic commands ###
